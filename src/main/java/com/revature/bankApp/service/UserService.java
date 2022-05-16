package com.revature.bankApp.service;

import at.favre.lib.crypto.bcrypt.BCrypt;
import com.revature.bankApp.model.Users;
import com.revature.bankApp.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository, BCrypt.Hasher hasher){this.userRepository = userRepository;
        this.hasher = hasher;
    }
    private final BCrypt.Hasher hasher;
    private final String SALT = ".512HxpO$qvUt!7y";

    public Users createNewUser(Users users){
        try{
            String encPass = encryptPassword(users.getPassword());
            users.setPassword((encPass));
            return userRepository.save(users);
        }catch(Exception e){
            throw new RuntimeException("Could not encrypt password");
        }
    }
    public Users findByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("findByUsername: No User found!"));
    }
    private String encryptPassword(String password){
        return new String(hasher.hash(4,
                SALT.getBytes(StandardCharsets.UTF_8),
                password.getBytes(StandardCharsets.UTF_8)),
                StandardCharsets.UTF_8);
    }
    public boolean comparePassword(String userPass, String dbUserPass){
        String encPass = encryptPassword(userPass);
        return encPass.equals(dbUserPass);
    }
}
