package com.revature.bankApp.controller;

import com.revature.bankApp.model.Users;
import com.revature.bankApp.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RequestMapping("/login")
public class LoginController {
    private final UserService userService;
    public LoginController(UserService userService){this.userService=userService;}
    @PostMapping
    public Integer checkLogin(@RequestBody Users users){
        Users emptyUsers = new Users();
        if(users != null){
            Users dbUsers = userService.findByUsername(users.getUsername());
            if(dbUsers != null){
                if(userService.comparePassword(users.getPassword(), dbUsers.getPassword()))
                {
                    return dbUsers.getId();
                }
            }
        }
        return 0;
    }
}
