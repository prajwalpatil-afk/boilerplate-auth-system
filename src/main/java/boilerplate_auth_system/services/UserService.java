package boilerplate_auth_system.services;

import boilerplate_auth_system.dtos.UserDto;

public interface UserService {
    //create user
    UserDto createUser(UserDto userDto);

    //get user by email id
    UserDto getUserByEmail(String email);

    //update user
    UserDto updateUser(UserDto userDto, String userId);

    //delete
    UserDto getUserById(String userId);

    //get user by id



    //get all users
    Iterable<UserDto> getAllUsers();
}
