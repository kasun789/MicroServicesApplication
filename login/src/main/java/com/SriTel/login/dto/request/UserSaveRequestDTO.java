package com.SriTel.login.dto.request;

import lombok.Data;

@Data
public class UserSaveRequestDTO {
    private String name;
    private String email;
    private String password;
}
