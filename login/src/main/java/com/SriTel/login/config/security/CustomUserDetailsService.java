package com.SriTel.login.config.security;

import com.SriTel.login.client.UserClient;
import com.SriTel.login.dto.request.UserLoginRequestDTO;
import com.SriTel.login.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private UserClient userClient;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserLoginRequestDTO loginRequestDTO = new UserLoginRequestDTO();
        loginRequestDTO.setEmail(email);
        Optional<User> user = Optional.ofNullable(userClient.getUserByEmail(loginRequestDTO));
        return user.map(CustomUserDetails::new).orElseThrow(()-> new UsernameNotFoundException("user not found with email: "+ email));
    }
}
