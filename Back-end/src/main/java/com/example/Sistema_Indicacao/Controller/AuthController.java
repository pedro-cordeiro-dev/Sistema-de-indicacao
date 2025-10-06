package com.example.Sistema_Indicacao.Controller;

import com.example.Sistema_Indicacao.DTO.LoginRequestDTO;
import com.example.Sistema_Indicacao.DTO.RegistrarRequestDTO;
import com.example.Sistema_Indicacao.DTO.ResponseDTO;
import com.example.Sistema_Indicacao.Repository.UsuarioRepository;
import com.example.Sistema_Indicacao.Service.Security.TokenService;
import com.example.Sistema_Indicacao.model.Usuario;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO body) {
        Usuario usuario = this.usuarioRepository.findByEmail(body.email()).orElseThrow(() -> new RuntimeException("User Not Found"));
        if (passwordEncoder.matches(body.password(), usuario.getSenha())) {
            String token = this.tokenService.GerarToken(usuario);
            return ResponseEntity.ok(new ResponseDTO(usuario.getNome(), token));
        } return ResponseEntity.badRequest().build();
    }

    @PostMapping("/registrar")
    public ResponseEntity registrar(@RequestBody RegistrarRequestDTO body) {

        Optional<Usuario> usuario = this.usuarioRepository.findByEmail(body.email());
        if (usuario.isEmpty()) {
            Usuario novoUsuario = new Usuario();
            novoUsuario.setSenha(passwordEncoder.encode(body.password()));
            novoUsuario.setEmail(body.email());
            novoUsuario.setNome(body.name());
            this.usuarioRepository.save(novoUsuario);

            String token = this.tokenService.GerarToken(novoUsuario);
            return ResponseEntity.ok(new ResponseDTO(novoUsuario.getNome(), token));

        } return ResponseEntity.badRequest().build();
    }

}
