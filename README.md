# LoginSignup Fullstack Project

A fullstack implementation of a Login and Signup system using:
- **Spring Boot**: Backend with MariaDB for data persistence and PasswordEncoder for secure password hashing.
- **ReactJS with Vite**: Frontend for a responsive user interface.
- **Security**: Custom SecurityConfig for public signup/login endpoints.

## Features
- User registration with email, password, name, and phone validation.
- Login authentication with form switching between Login and Signup.
- Database integration with auto-incremented IDs.
- Stylish gradient background and matching button designs.
- Seamless frontend-backend integration in a single repository.

## Project Structure
- `src/`: Contains the Spring Boot backend code.
- `loginsignup/`: Contains the Vite React frontend application.

## How to Run
- Ensure Java, Maven, Node.js, npm, and MariaDB are installed.
- Configure `src/main/resources/application.properties` with your MariaDB credentials.
- Start the backend: `mvn spring-boot:run`.
- Start the frontend: `cd frontend && npm run dev` (access at `http://localhost:5173`).
- For production, build the frontend (`cd frontend && npm run build`), copy `dist/*` to `src/main/resources/static/`, and run the backend.

## Future Enhancements
- Implement JWT authentication for secure sessions.
- Add email verification for account activation.
- Enhance form validation with client-side feedback.
- Add responsive design for mobile devices.
- Implement "Forgot Password" routing and functionality.

## Contributing
Feel free to fork this repository, submit pull requests, or open issues for bugs and feature requests.
