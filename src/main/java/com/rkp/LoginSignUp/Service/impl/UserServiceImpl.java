package com.rkp.LoginSignUp.Service.impl;

import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rkp.LoginSignUp.Dto.LoginDTO;
import com.rkp.LoginSignUp.Dto.UserDTO;
import com.rkp.LoginSignUp.Entity.User;
import com.rkp.LoginSignUp.Repo.UserRepo;
import com.rkp.LoginSignUp.Service.UserService;
import com.rkp.LoginSignUp.response.LoginResponse;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public String addUser(UserDTO userDTO) {
        if (userDTO.getEmail() == null || !userDTO.getEmail().contains("@")) {
            return "Invalid email format";
        }
        if (userDTO.getPassword() == null || userDTO.getPassword().length() < 8) {
            return "Password must be at least 8 characters";
        }
        if (userRepo.findByEmail(userDTO.getEmail()) != null) {
            return "Email already registered";
        }

        User user = new User();
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPasswordHash(passwordEncoder.encode(userDTO.getPassword()));
        user.setPhone(userDTO.getPhone());
        user.setVerified(0);
        user.setCreatedAt(LocalDateTime.now());

        userRepo.save(user);
        return user.getName();
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        User user = userRepo.findByEmail(loginDTO.getEmail());
        if (user != null) {
            boolean isPwdRight = passwordEncoder.matches(loginDTO.getPassword(), user.getPasswordHash());
            if (isPwdRight) {
                return new LoginResponse("Login Success", true);
            } else {
                return new LoginResponse("Incorrect Password", false);
            }
        } else {
            return new LoginResponse("Email not exists", false);
        }
    }
}