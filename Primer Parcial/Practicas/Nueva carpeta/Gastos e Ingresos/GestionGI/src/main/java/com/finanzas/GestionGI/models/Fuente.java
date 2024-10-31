package com.finanzas.GestionGI.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "fuentes") // Asegúrate de que esta tabla existe en tu base de datos
@Data
public class Fuente {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre; // Nombre de la fuente de ingreso

    // Otros campos que puedas necesitar
}
