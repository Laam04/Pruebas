package com.finanzas.GestionGI.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finanzas.GestionGI.models.Usuario;
import com.finanzas.GestionGI.repositories.UsuarioRepository;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Método para registrar un nuevo usuario
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Usuario usuario) {
        // Aquí se debería incluir lógica para comprobar si el usuario ya existe
        usuarioRepository.save(usuario);
        return ResponseEntity.ok("Usuario registrado con éxito");
    }

    // Método para iniciar sesión
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Usuario usuario) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findByUsername(usuario.getUsername());

        if (optionalUsuario.isPresent()) {
            Usuario foundUser = optionalUsuario.get();
            // Aquí agregas la lógica para verificar la contraseña y generar el token
            return ResponseEntity.ok("Inicio de sesión exitoso, token: ..."); // Aquí debes incluir el token JWT
        } else {
            return ResponseEntity.status(401).body("Credenciales incorrectas");
        }
    }

    // Otros métodos...
}
