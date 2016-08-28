package com.wk;

import java.io.IOException;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;
import com.google.common.io.ByteStreams;

/**
 * @author WaleedK
 */
@Component
public class LoadData {
	@Autowired
	private ResourceLoader resourceLoader;

	@Autowired
	private PetRepository petRepository;

	@EventListener
	public void loadDataOnContextRefresh(ApplicationReadyEvent event) throws IOException {
		Pet pet1 = new Pet();
		pet1.setName("Shishi-maru the angry cat");
		pet1.setType(PetType.CAT);
		pet1.setBio("Move over, Grumpy Cat, Shishi-maru (@emonemon) is scowling his way into the spotlight. This adorable little feline seems to ham it up for his owner's lens, alternating between lounge-y poses, cardboard box adventures and occasional gut-piercing angry facial expression. ");
		pet1.setImage(ByteStreams.toByteArray(resourceLoader.getResource
				("classpath:pet-images/Shishi.jpg").getInputStream()));

		Pet pet2 = new Pet();
		pet2.setName("Momo the adventurous Border Collie ");
		pet2.setType(PetType.DOG);
		pet2.setBio("@Andrewknapp's dog Momo is an explorer, athlete, and from the looks of it, extremely well-trained. Photos of Momo range from candid shots in the Canadian countryside to apparently painstakingly-posed compositions that would have tested the patience of any other pooch. Momo is featured in the leading image of this article as well as this serene lake fetch video.");
		pet2.setImage(ByteStreams.toByteArray(resourceLoader.getResource
				("classpath:pet-images/Momo.jpg").getInputStream()));

		Pet pet3 = new Pet();
		pet3.setName("Mensweardog—you guessed it—is a dog in menswear");
		pet3.setType(PetType.DOG);
		pet3.setBio("Dogs, as they say, are man's best friend. And what good is a best friend if he won't let you borrow his clothes once in a while? @Mensweardog is a three-year-old Shiba living in New York City. Aside from dressing better than most men I know, this pup enjoys long walks and rolling in grass.");
		pet3.setImage(ByteStreams.toByteArray(resourceLoader.getResource
				("classpath:pet-images/Mensweardog.jpg").getInputStream()));

		Pet pet4 = new Pet();
		pet4.setName("Eiconne the miniature dachshund is a dapper diner");
		pet4.setType(PetType.DOG);
		pet4.setBio("Two of life's simple pleasures: dogs and food. Add to that a few beer photos and you have the feed of @eiconne. I don't know much about this little dog or his skilled personal photographer/owner because the account is entirely in Japanese, but I do know that this little dog finds himself sitting with a beer quite often. ");
		pet4.setImage(ByteStreams.toByteArray(resourceLoader.getResource
				("classpath:pet-images/Eiconne.jpg").getInputStream()));

		Pet pet5 = new Pet();
		pet5.setName("Darcy the hedgehog is as cute as she is prickly");
		pet5.setType(PetType.HEDGEHOG);
		pet5.setBio("Is there anything cuter than a happy hedgehog? Instagram darling @darcytheflyinghedgehog has over 120,000 loyal fans of her calm cuteness and spiky exterior. Darcy's owner does an excellent job posing her in various spots, showcasing her in simple scenes that highlight her spectacular spines and sweet little smile.");
		pet5.setImage(ByteStreams.toByteArray(resourceLoader.getResource
				("classpath:pet-images/Darcy.jpg").getInputStream()));

		Pet pet6 = new Pet();
		pet6.setName("Chintubehd");
		pet6.setType(PetType.CHINCHILLAS);
		pet6.setBio("Forget whatever reality TV family is in the headlines. This family of chinchillas provides plenty of entertainment with their Instagram account (@chintubehd) and YouTube channel. Follow this fuzzy family as they take dust baths and look extremely cuddly.");
		pet6.setImage(ByteStreams.toByteArray(resourceLoader.getResource
				("classpath:pet-images/Chinetubehd.jpg").getInputStream()));


		petRepository.save(Arrays.asList(pet1, pet2, pet3, pet4, pet5, pet6));
	}
}
