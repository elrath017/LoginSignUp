package com.rkp.LoginSignUp.Service;

import com.rkp.LoginSignUp.Dto.LoginDTO;
import com.rkp.LoginSignUp.Dto.UserDTO;
import com.rkp.LoginSignUp.response.LoginResponse;

public interface UserService {

    String addUser(UserDTO userDTO);

    LoginResponse loginUser(LoginDTO loginDTO);
}
