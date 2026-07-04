package boilerplate_auth_system.services;

import boilerplate_auth_system.dtos.UserDto;

public interface AuthService {
    UserDto registerUser(UserDto userDto);
//    UserDto loginUser(UserDto userDto);
}
