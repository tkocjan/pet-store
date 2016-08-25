package com.wk;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Base64;
import java.util.List;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author WaleedK
 * @since 0.0.0
 */
@Service
public class PetService {
	@Autowired
	private PetRepository petRepository;

	@Transactional
	public void save(Pet pet, MultipartFile csvFile) {
		File tempFile = null;
		try {
			tempFile = File.createTempFile("temp", "");
			csvFile.transferTo(tempFile);
			String base64 = Base64.getEncoder().encodeToString(Files.readAllBytes(tempFile.toPath()));
			pet.setBase64Image(base64);
		} catch (IOException e) {
			e.printStackTrace();
		}
		petRepository.save(pet);
	}

	@Transactional
	public List<Pet> getAll() {
		return petRepository.findAll();
	}

	public void delete(long petId) {
		petRepository.delete(petId);
	}
}
