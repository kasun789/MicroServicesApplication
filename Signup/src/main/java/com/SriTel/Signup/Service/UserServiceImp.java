package com.SriTel.Signup.Service;

import com.SriTel.Signup.Model.User;
import com.SriTel.Signup.Repository.UserRepository;
import com.SriTel.Signup.dto.UserLoginRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User add(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> update(User user, int userId) {
       return userRepository.findById(userId).map(user1 -> {
             user1.setName(user.getName());
             user1.setNic(user.getNic());
             user1.setEmail(user.getEmail());
             user1.setPhoneNo(user.getPhoneNo());
             user1.setPassword(user.getPassword());
             return userRepository.save(user1);
         });
    }

    @Override
    public boolean delete(int userId) {
        userRepository.deleteById(userId);
        return true;
    }

    @Override
    public User viewSpecificUser(int userId) {
        return userRepository.findById(userId).orElse(null);
    }

    @Override
    public Optional<User> getUserByEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        return user;
    }



    @Override
    public List<User> viewAll() {
        return userRepository.findAll();
    }
}
