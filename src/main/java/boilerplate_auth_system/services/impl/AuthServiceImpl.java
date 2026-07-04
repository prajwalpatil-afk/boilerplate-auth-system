package boilerplate_auth_system.services.impl;

import boilerplate_auth_system.dtos.UserDto;
import boilerplate_auth_system.services.AuthService;
import boilerplate_auth_system.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserService userService;
    @Override
    public UserDto registerUser(UserDto userDto) {
        UserDto userDto1 = userService.createUser(userDto);
        return userDto1;
    }
}
