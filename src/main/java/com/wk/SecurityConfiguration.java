package com.wk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Override
	public void configure(WebSecurity web) throws Exception {
		// don't need security for these static resources
		web.ignoring()
				.antMatchers("/js/**")
				.antMatchers("/templates/**")
				.antMatchers("/bower-lib/**")
				.antMatchers("/styles/**");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				.csrf().disable()

				.authorizeRequests()

				.antMatchers("/", "/login", "/index.html", "/user").permitAll()

				.antMatchers(HttpMethod.GET, "/pet/**").hasAuthority(Permission.READ.getAuthority())
				.antMatchers(HttpMethod.POST, "/pet/**").hasAuthority(Permission.CREATE.getAuthority())
				.antMatchers(HttpMethod.DELETE, "/pet/**").hasAuthority(Permission.DELETE.getAuthority())

				.anyRequest().authenticated()

				.and()
				.formLogin()

				.and()
				.logout()
				.deleteCookies("JSESSIONID")
				.permitAll()

				.and()
				.rememberMe().alwaysRemember(false)

				.and()
				.sessionManagement().maximumSessions(1);
	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth
				.inMemoryAuthentication()
				.withUser("waleed").password("p").authorities(Permission.USER_PERMISSIONS)
				.and()
				.withUser("admin").password("p").authorities(Permission.ADMIN_PERMISSIONS);
	}
}
