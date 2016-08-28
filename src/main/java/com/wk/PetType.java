package com.wk;

/**
 * @author WaleedK
 */
public enum PetType {
	DOG("Dog"),
	CAT("Cat"),
	HAMSTER("Hamster"),
	HEDGEHOG("Hedgehog"),
	CHINCHILLAS("Chinchillas");

	private String name;

	PetType(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}
}
