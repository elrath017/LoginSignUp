package com.rkp.LoginSignUp.Dto;

public class UserDTO {

    private String name;
    private String email;
    private String password; // Plain text, to be hashed in service
    private String phone;

    // Default constructor
    public UserDTO() {
    }

    // Parameterized constructor for registration
    public UserDTO(String name, String email, String password, String phone) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "UserDTO [name=" + name + ", email=" + email + ", password=" + password + ", phone=" + phone + "]";
    }
}