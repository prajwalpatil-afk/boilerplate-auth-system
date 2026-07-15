package boilerplate_auth_system.dtos;

public record LoginRequest(
        String email,
        String password
) {
}
