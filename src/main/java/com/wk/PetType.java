package com.wk;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author WaleedK
 */
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum PetType {
	DOG("Dog"),
	CAT("Cat"),
	HAMSTER("Hamster");

	private String name;

	PetType(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}
}
