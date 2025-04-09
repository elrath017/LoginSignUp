# LoginSignup Fullstack Project

A fullstack implementation of a Login and Signup system using:
- **Spring Boot**: Backend with MariaDB for data persistence and PasswordEncoder for secure password hashing.
- **ReactJS**: Frontend for user interface.
- **Security**: Custom SecurityConfig for public signup/login endpoints.

## Features
- User registration with email and password validation.
- Login authentication.
- Database integration with auto-incremented IDs.

## Setup
1. Clone the repo: `git clone <your-repo-url>`
2. Configure `application.properties` with your MariaDB credentials.
3. Run the Spring Boot app: `mvn spring-boot:run`
4. Start the React frontend (separate setup).

## Future Enhancements
- JWT authentication.
- Email verification.