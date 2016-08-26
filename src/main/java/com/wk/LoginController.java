package com.wk;

import java.security.Principal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author WaleedK
 * @since 0.0.0
 */
@RestController
public class LoginController {

	@RequestMapping("/user")
	public Principal user(Principal user) {
		return user;
	}
}
