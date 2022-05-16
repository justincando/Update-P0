package com.revature.bankApp;

import at.favre.lib.crypto.bcrypt.BCrypt;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BankAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankAppApplication.class, args);
	}
	@Bean
	public BCrypt.Hasher getHasher()
	{
		return BCrypt.withDefaults();
	}

}
