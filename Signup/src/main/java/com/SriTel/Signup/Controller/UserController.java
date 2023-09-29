package com.SriTel.Signup.Controller;

import com.SriTel.Signup.Model.User;
import com.SriTel.Signup.Service.UserService;
import com.SriTel.Signup.dto.UserLoginRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;


    @PostMapping("/add")
    private String addUser(@RequestBody User user){
        if(String.valueOf(user.getPhoneNo()).length() == 9){
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            userService.add(user);
            return "User added";
        }

        return "User addition Unsuccessful";
    }

    @GetMapping("/viewAll")
    private List<User> viewAllUser(){
        return userService.viewAll();
    }

    @PutMapping("/update/{userId}")
    private String updateUser(@RequestBody User user,@PathVariable int userId){

        if(String.valueOf(user.getPhoneNo()).length() == 9){
            userService.update(user,userId);
            return "User update Successfully";
        }

        return "User update Unsuccessfully";

    }

    @DeleteMapping("/delete/{userId}")
    private String deleteUser(@PathVariable int userId){
       return (userService.delete(userId)) ? "User Delete Successfully" : "User Delete UnSuccessfully";
    }

    @PostMapping( "/getUser")
    public Optional<User> getUserByEmail(@RequestBody UserLoginRequestDTO userLoginRequestDTO){
        Optional<User> user = userService.getUserByEmail(userLoginRequestDTO.getEmail());
      return user;
    }


    @GetMapping("/viewSpecific/{userId}")
    private User viewSpecificUser(@PathVariable int userId){
        return userService.viewSpecificUser(userId);
    }
}
