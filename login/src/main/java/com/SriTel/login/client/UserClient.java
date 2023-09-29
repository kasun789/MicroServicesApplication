package com.SriTel.login.client;

import com.SriTel.login.dto.request.UserLoginRequestDTO;
import com.SriTel.login.model.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@FeignClient(name = "signup", url = "${spring.application.config.user-url}")
public interface UserClient {

    @PostMapping( "/getUser")
    Optional<User> getUserByEmail(@RequestBody UserLoginRequestDTO userLoginRequestDTO);
}
