package boilerplate_auth_system.services;

import boilerplate_auth_system.dtos.UserDto;

public interface UserService {
    //create user
    UserDto createUser(UserDto userDto);

    //get user by id
    UserDto getUserById(String userId);

    //get user by email id
    UserDto getUserByEmail(String email);

    //get all users
    Iterable<UserDto> getAllUsers();

    //update user
    UserDto updateUser(UserDto userDto, String userId);

    //delete user
    void deleteUser(String userId);
}
