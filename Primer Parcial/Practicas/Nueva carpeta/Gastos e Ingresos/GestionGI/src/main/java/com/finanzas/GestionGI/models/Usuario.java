package com.finanzas.GestionGI.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "usuarios") // Asegúrate de que esta tabla existe en tu base de datos
@Data // Si estás usando Lombok, esto generará getters, setters, etc.
public class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username; // Nombre de usuario

    private String password; // Contraseña (asegúrate de manejar el hash)

    // Otros campos que puedas necesitar
}
