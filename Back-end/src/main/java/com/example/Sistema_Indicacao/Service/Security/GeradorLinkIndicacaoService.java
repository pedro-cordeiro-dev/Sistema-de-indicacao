package com.example.Sistema_Indicacao.Service.Security;

import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@Service
public class GeradorLinkIndicacaoService {

    public String GeradorHash(String input) {

        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(input.getBytes(StandardCharsets.UTF_8));
            String codigo = Base64.getUrlEncoder().encodeToString(hash);

            return codigo.substring(0, 10);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }


}
