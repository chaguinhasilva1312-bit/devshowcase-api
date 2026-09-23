package com.devshowcase.api.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "tb_profile")
@Getter @Setter @NoexceptConstructor @AllArgsConstructor
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    private String bio;

    @OneToMany(mappedBy = "profile", cascade = CascadeType.ALL)
    private List<Project> projects;
}
