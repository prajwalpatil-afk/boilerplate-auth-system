package boilerplate_auth_system.config;


import boilerplate_auth_system.security.JwtAuthenticationFilter;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import tools.jackson.databind.ObjectMapper;

import java.util.Map;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
            .cors(Customizer.withDefaults())
                .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorizeHttpRequests ->
                        authorizeHttpRequests
                                .requestMatchers("/api/v1/auth/register").permitAll()
                                .requestMatchers("/api/v1/auth/login").permitAll()
                                .anyRequest().authenticated()
                )
                .exceptionHandling(ex -> ex.authenticationEntryPoint((request, response, e) -> {
                    //error message
                    e.printStackTrace();
                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                    response.setContentType("application/json");
                    String message = "Unauthorized Access: " + e.getMessage();
                    Map<String,String> errorMap = Map.of("message", message,"statusCode", String.valueOf(HttpServletResponse.SC_UNAUTHORIZED));
                    var objectMapper = new ObjectMapper();
                    response.getWriter().write(objectMapper.writeValueAsString(errorMap));
                }))
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
//    @Bean
//    public UserDetailsService users() {
//        User.UserBuilder userBuilder = User.withDefaultPasswordEncoder();
//        UserDetails user1 = userBuilder.username("admin").password("admin").roles("ADMIN").build();
//        return new InMemoryUserDetailsManager(user1);
//    }
}


