package boilerplate_auth_system.utility;

import java.util.UUID;

public class UserUtility {
    public static UUID parseUUID(String uuid){
        return UUID.fromString(uuid);
    }
}
