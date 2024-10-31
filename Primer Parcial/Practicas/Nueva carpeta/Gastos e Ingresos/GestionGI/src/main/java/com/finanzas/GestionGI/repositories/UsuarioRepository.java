package com.finanzas.GestionGI.repositories;

import com.finanzas.GestionGI.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Método para encontrar un usuario por su nombre (email o username, según como manejes los inicios de sesión)
    Optional<Usuario> findByUsername(String username);

    // Método para verificar si un nombre de usuario ya existe
    boolean existsByUsername(String username);
}
