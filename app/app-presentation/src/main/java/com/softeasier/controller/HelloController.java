package com.softeasier.controller;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softeasier.data.User;

@RestController
public class HelloController {
	private static Logger logger= Logger.getLogger(HelloController.class);
	@RequestMapping("/")
	public User index() {
		logger.debug("request for /");
		return new User("David", 28);
	}
}
