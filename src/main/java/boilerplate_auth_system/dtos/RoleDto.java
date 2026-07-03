package boilerplate_auth_system.dtos;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoleDto {
    private UUID id;
    private String name;
}
