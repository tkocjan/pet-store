package com.wk;

import java.awt.*;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;
import javax.imageio.ImageIO;
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
	public Pet save(Pet pet, MultipartFile multipartFile) throws IOException {
		if (multipartFile != null) {
			pet.setImage(multipartFile.getBytes());
			Image image = ImageIO.read(new ByteArrayInputStream(pet.getImage()));
			if (image == null) {
				throw new RuntimeException("Image is not valid");
			}

		}

		return petRepository.save(pet);
	}

	@Transactional(readOnly = true)
	public Pet get(long petId) {
		return petRepository.findOne(petId);
	}

	@Transactional(readOnly = true)
	public List<Pet> getAll(String query) {
		return query == null ? petRepository.findAll() : petRepository.findAll(query);
	}

	@Transactional
	public void delete(long petId) {
		petRepository.delete(petId);
	}
}
