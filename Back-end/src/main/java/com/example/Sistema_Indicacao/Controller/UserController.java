package com.example.Sistema_Indicacao.Controller;

import jakarta.persistence.Entity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    public ResponseEntity<String> getUsuario() {
        return ResponseEntity.ok("sucesso!");
    }

}
