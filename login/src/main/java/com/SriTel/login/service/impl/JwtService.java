package com.SriTel.login.service.impl;

public interface JwtService {
    String generateToken(String email);

    void validateToken(String token);
}
