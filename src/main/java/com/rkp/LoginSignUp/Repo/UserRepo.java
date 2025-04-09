package com.rkp.LoginSignUp.Repo;

import com.rkp.LoginSignUp.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
    User findByEmail(String email);

    // Optional<User> findOneByEmailAndPassword(String email,String password);
}