package com.wk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author WaleedK
 * @since 0.0.0
 */
@Service
public class PetService {
	@Autowired
	private PetRepository petRepository;

	public void save(Pet pet) {
		petRepository.save(pet);
	}
}
