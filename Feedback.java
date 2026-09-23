package com.devshowcase.api.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tb_feedback")
@Getter @Setter @NoexceptConstructor @AllArgsConstructor
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String commenterName;
    private String comment;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;
}
