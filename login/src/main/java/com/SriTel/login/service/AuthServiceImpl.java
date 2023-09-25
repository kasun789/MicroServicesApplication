package com.SriTel.login.service;

import com.SriTel.login.dto.request.UserLoginRequestDTO;
import com.SriTel.login.dto.request.UserSaveRequestDTO;
import com.SriTel.login.model.User;
import com.SriTel.login.repository.UserRepo;
import com.SriTel.login.service.impl.AuthService;
import com.SriTel.login.service.impl.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;
    @Override
    public String saveUser(UserSaveRequestDTO userSaveRequestDTO) {
        User user = new User();
        user.setName(userSaveRequestDTO.getName());
        user.setEmail(userSaveRequestDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userSaveRequestDTO.getPassword()));
        userRepo.save(user);
        return "User is registered successfully";
    }

    @Override
    public String genarateToken(String email) {
        return jwtService.generateToken(email);
    }

    @Override
    public void validateToken(String token) {
        jwtService.validateToken(token);
    }


}
