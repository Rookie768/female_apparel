package com.female.Apparel.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "fashion_apparel")
@Getter
@Setter
public class Apparel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Lob
    private String description;

    private LocalDate addedDate;

    private boolean available = true;

    private String imageUrl;
}
