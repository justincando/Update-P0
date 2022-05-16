package com.revature.bankApp.controller;

import com.revature.bankApp.model.Users;
import com.revature.bankApp.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService){this.userService=userService;}

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Users createNewUser(@RequestBody Users users){return userService.createNewUser(users);}

}
