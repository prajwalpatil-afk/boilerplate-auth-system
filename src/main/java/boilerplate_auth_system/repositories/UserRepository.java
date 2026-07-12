package boilerplate_auth_system.repositories;

import boilerplate_auth_system.entities.Provider;
import boilerplate_auth_system.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<User> findByProviderAndProviderId(Provider provider, String providerId);
}
