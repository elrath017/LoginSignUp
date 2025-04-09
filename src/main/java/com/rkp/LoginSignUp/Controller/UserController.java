package com.rkp.LoginSignUp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rkp.LoginSignUp.Dto.LoginDTO;
import com.rkp.LoginSignUp.Dto.UserDTO;
import com.rkp.LoginSignUp.Service.UserService;
import com.rkp.LoginSignUp.response.LoginResponse;

@RestController
@CrossOrigin
@RequestMapping("/api")

public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public String saveUser(@RequestBody UserDTO userDTO){

        String id = userService.addUser(userDTO);
        return id;        
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

}
