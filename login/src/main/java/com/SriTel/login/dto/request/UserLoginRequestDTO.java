package com.SriTel.login.dto.request;

import lombok.Data;

@Data
public class UserLoginRequestDTO {

    private String email;
    private String password;
}
