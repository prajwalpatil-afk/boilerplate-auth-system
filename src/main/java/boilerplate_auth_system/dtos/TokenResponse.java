package boilerplate_auth_system.dtos;

public record TokenResponse(
        String accessToken,
        String refreshToken,
        long expiresIn,
        String tokenType,
        UserDto user
) {

    public static TokenResponse of(String accessToken, String freshToken, long expiresIn, UserDto user){
        return new TokenResponse(accessToken, freshToken, expiresIn, "Bearer", user);
    }

}
