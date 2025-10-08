package com.example.Sistema_Indicacao.Controller;

import com.example.Sistema_Indicacao.Repository.UsuarioRepository;
import com.example.Sistema_Indicacao.DTO.UserDTO;
import com.example.Sistema_Indicacao.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UsuarioRepository userRepository;

    @GetMapping
    public ResponseEntity<UserDTO> getUsuario(Principal principal) {

        Usuario usuario = userRepository.findByEmail(principal.getName())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        UserDTO userDTO = new UserDTO(
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getPontuacao(),
                usuario.getLinkIndicacao()
        );

        return ResponseEntity.ok(userDTO);
    }
}
