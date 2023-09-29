package com.SriTel.login.service.impl;

import com.SriTel.login.dto.request.UserLoginRequestDTO;
import com.SriTel.login.dto.request.UserSaveRequestDTO;

public interface AuthService {

    String genarateToken(String email);

    void validateToken(String token);
}
