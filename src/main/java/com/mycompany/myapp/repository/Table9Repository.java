package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Table9;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Table9 entity.
 */
@SuppressWarnings("unused")
@Repository
public interface Table9Repository extends JpaRepository<Table9, Long> {}
