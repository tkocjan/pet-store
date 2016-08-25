package com.wk;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author WaleedK
 * @since 0.0.0
 */
@Service
public class PetService {
	@Autowired
	private PetRepository petRepository;

	@Transactional
	public void save(Pet pet) {
		petRepository.save(pet);
	}

	@Transactional
	public List<Pet> getAll() {
		return petRepository.findAll();
	}
}
