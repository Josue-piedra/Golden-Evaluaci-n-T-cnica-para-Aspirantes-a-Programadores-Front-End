package com.socialpost.socialapp.model;

import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "posts") // Define el nombre de la tabla en la BD
@Data // Genera automáticamente Getters, Setters, toString, etc.
@NoArgsConstructor // Constructor vacío requerido por JPA
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255) // No permite nulos y limita el tamaño a 255
    private String text;

    @Column(nullable = false, length = 100) // No permite nulos y limita el tamaño a 100
    private String author;

    @Column(nullable = false) // No permite nulos
    private String date;

    private int likes;
    private int comments;
    private int shares;
}
