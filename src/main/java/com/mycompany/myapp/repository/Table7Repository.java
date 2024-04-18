package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Table7;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Table7 entity.
 */
@SuppressWarnings("unused")
@Repository
public interface Table7Repository extends JpaRepository<Table7, Long> {}
