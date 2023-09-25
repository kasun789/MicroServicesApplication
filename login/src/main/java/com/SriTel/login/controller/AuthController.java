package com.SriTel.login.controller;

import com.SriTel.login.client.UserClient;
import com.SriTel.login.dto.request.UserLoginRequestDTO;
import com.SriTel.login.dto.request.UserSaveRequestDTO;
import com.SriTel.login.service.impl.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/auth")
public class AuthController {

    @Autowired
    private AuthService authService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping( "/userLogin")
    public String loginUser(@RequestBody UserLoginRequestDTO userLoginRequestDTO){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLoginRequestDTO.getEmail(),userLoginRequestDTO.getPassword()));
        if(authentication.isAuthenticated()){
            return authService.genarateToken(userLoginRequestDTO.getEmail());

        }else {
            throw new RuntimeException("Invalid Access!");
        }

    }
    @GetMapping("/validate")
    public String validateToken (@RequestParam("token") String token){
        authService.validateToken(token);
        return "Token is valid";
    }

    @GetMapping("/get")
    public String get (){
        return "Dula...";
    }

}
