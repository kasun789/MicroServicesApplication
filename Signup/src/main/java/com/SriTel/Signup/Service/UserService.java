package com.SriTel.Signup.Service;

import com.SriTel.Signup.Model.User;

import java.util.List;
import java.util.Optional;

public interface UserService{
    public User add(User user);
    public List<User> viewAll();
    public Optional<User> update(User user, int userId);
    public boolean delete(int userId);
    public User viewSpecificUser(int userId);
}
