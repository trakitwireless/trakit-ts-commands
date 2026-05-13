import { email, ISerializable, JsonObject } from "@trakit/objects";
/**
 * A container class used to house the login identifying a {@link User}.
 * Used specifically to get session details.
 */
export declare class ParamLogin implements ISerializable {
    /**
     * The {@link User}'s login.
     */
    login: email;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamLogin.d.ts.map