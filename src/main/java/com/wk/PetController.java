package com.wk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author WaleedK
 * @since 0.0.0
 */
@RestController
@RequestMapping("/pet")
public class PetController {
	@Autowired
	private PetService petService;

	@RequestMapping(method = RequestMethod.POST)
	public void create() {

	}

	@RequestMapping(method = RequestMethod.GET)
	public void get(@PathVariable("petId") int petId) {

	}

	@RequestMapping(method = RequestMethod.DELETE)
	public void delete(@PathVariable("petId") int petId) {

	}
}
