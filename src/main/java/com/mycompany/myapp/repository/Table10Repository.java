package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Table10;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Table10 entity.
 */
@SuppressWarnings("unused")
@Repository
public interface Table10Repository extends JpaRepository<Table10, Long> {}
