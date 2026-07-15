package boilerplate_auth_system.services.impl;

import boilerplate_auth_system.dtos.UserDto;
import boilerplate_auth_system.services.AuthService;
import boilerplate_auth_system.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;
    @Override
    public UserDto registerUser(UserDto userDto) {
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        UserDto userDto1 = userService.createUser(userDto);
        return userDto1;
    }
}
