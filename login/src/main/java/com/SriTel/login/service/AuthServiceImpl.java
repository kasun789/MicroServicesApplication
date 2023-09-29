package com.SriTel.login.service;

import com.SriTel.login.service.impl.AuthService;
import com.SriTel.login.service.impl.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;


    @Override
    public String genarateToken(String email) {
        return jwtService.generateToken(email);
    }

    @Override
    public void validateToken(String token) {
        jwtService.validateToken(token);
    }


}
