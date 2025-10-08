package com.example.Sistema_Indicacao.Controller;

import com.example.Sistema_Indicacao.DTO.LoginRequestDTO;
import com.example.Sistema_Indicacao.DTO.RegistrarRequestDTO;
import com.example.Sistema_Indicacao.DTO.ResponseDTO;
import com.example.Sistema_Indicacao.Repository.UsuarioRepository;
import com.example.Sistema_Indicacao.Service.Security.GeradorLinkIndicacaoService;
import com.example.Sistema_Indicacao.Service.Security.TokenService;
import com.example.Sistema_Indicacao.model.Usuario;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
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
    private final GeradorLinkIndicacaoService geradorLink;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO body) {
        Usuario usuario = this.usuarioRepository.findByEmail(body.email()).orElseThrow(() -> new RuntimeException("User Not Found"));
        if (passwordEncoder.matches(body.password(), usuario.getSenha())) {
            String token = this.tokenService.GerarToken(usuario);
            return ResponseEntity.ok(new ResponseDTO(usuario.getNome(), token, usuario.getLinkIndicacao()));
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/registrar")
    @Transactional
    public ResponseEntity registrar(@RequestBody RegistrarRequestDTO body) {
        if (this.usuarioRepository.findByEmail(body.email()).isPresent()) {
            return ResponseEntity.badRequest().body("Este email já está cadastrado.");
        }

        Usuario novoUsuario = new Usuario();
        novoUsuario.setSenha(passwordEncoder.encode(body.password()));
        novoUsuario.setEmail(body.email());
        novoUsuario.setNome(body.name());

        if (body.codigoIndicacao() != null && !body.codigoIndicacao().isEmpty()) {
            Optional<Usuario> usuarioIndicadorOpt = usuarioRepository.findByLinkIndicacao(body.codigoIndicacao());

            if (usuarioIndicadorOpt.isPresent()) {
                Usuario usuarioIndicador = usuarioIndicadorOpt.get();
                usuarioIndicador.setPontuacao(usuarioIndicador.getPontuacao() + 1);
                novoUsuario.setIndicador(usuarioIndicador);
                usuarioRepository.save(usuarioIndicador);
            }
        }

        this.usuarioRepository.save(novoUsuario);

        String codigo = geradorLink.GeradorHash(novoUsuario.getId());
        novoUsuario.setLinkIndicacao(codigo);
        usuarioRepository.save(novoUsuario);

        String token = this.tokenService.GerarToken(novoUsuario);
        String linkIndicacao = "http://localhost:5173/registrar?ref=" + codigo; // Ajuste se a URL do front for diferente

        return ResponseEntity.ok(new ResponseDTO(novoUsuario.getNome(), token, linkIndicacao));
    }
}