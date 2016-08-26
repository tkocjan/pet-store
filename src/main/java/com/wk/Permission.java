package com.wk;

import org.springframework.security.core.GrantedAuthority;

/**
 * @author WaleedK
 * @since 0.0.0
 */
public enum Permission implements GrantedAuthority {
	USER,
	DELETE;

	@Override
	public String getAuthority() {
		return name();
	}
}
