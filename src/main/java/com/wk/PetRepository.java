package com.wk;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * @author WaleedK
 */
public interface PetRepository extends JpaRepository<Pet, Long> {
	@Query("FROM Pet a WHERE a.name like :query% ")
	List<Pet> findAll(@Param("query") String query);
}
