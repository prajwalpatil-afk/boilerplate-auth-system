package boilerplate_auth_system.config;

public class AppConstants {
    public static final String[] AUTH_PUBLIC_URL = {
            "/api/v1/auth/**",
            "/v3/api-docs/**",
            "/swagger-ui.html",
            "/swagger-ui/**"
    };
}

//.requestMatchers("/api/v1/auth/register").permitAll()
//.requestMatchers("/api/v1/auth/login").permitAll()
//.requestMatchers("/api/v1/auth/refresh").permitAll()
//.requestMatchers("/api/v1/auth/logout").permitAll()
//.requestMatchers("/v3/api-docs/**", "/swagger-ui.html", "/swagger-ui/**").permitAll()