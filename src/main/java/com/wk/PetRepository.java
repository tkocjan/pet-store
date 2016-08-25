package com.wk;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author WaleedK
 * @since 0.0.0
 */
public interface PetRepository extends JpaRepository<Pet, Long> {

}
