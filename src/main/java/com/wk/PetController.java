package com.wk;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * @author WaleedK
 */
@RestController
@RequestMapping("/pet")
public class PetController {
	@Autowired
	private PetService petService;

	@RequestMapping(method = RequestMethod.POST, consumes = {"multipart/form-data"})
	public Long create(@RequestPart("pet") String petString,
			@RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
		return petService.save(new ObjectMapper().readValue(petString, Pet.class), image).getId();
	}

	@RequestMapping(value = "{petId}", method = RequestMethod.GET)
	public Pet get(@PathVariable("petId") int petId) {
		return petService.get(petId);
	}

	@RequestMapping(value = "{petId}", method = RequestMethod.DELETE)
	public void delete(@PathVariable long petId) {
		petService.delete(petId);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public List<Pet> getAll(String query) {
		List<Pet> all = petService.getAll(query);
		return all;
	}
}
