package com.wk;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author WaleedK
 */
@Service
public class PetService {
	@Autowired
	private PetRepository petRepository;

	@Transactional
	public Pet save(Pet pet, MultipartFile image) {
		try {
			if (image != null) {
				pet.setImage(image.getBytes());
			}
			pet = petRepository.save(pet);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return pet;
	}

	@Transactional
	public Pet get(long petId) {
		return petRepository.findOne(petId);
	}

	@Transactional
	public List<Pet> getAll(String query) {
		return query == null ? petRepository.findAll() : petRepository.findAll(query);
	}

	@Transactional
	public void delete(long petId) {
		petRepository.delete(petId);
	}
}
