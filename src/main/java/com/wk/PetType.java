package com.wk;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author WaleedK
 * @since 0.0.0
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
