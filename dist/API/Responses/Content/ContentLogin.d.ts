import { email, ISerializable, JsonObject, nothing } from "@trakit/objects";
import { IContent } from "./IContent";
/**
 * A container for the login of the {@link User} requested/created.
 */
export declare class ContentLogin implements IContent, ISerializable {
    /**
     * Creates a {@link ContentLogin} from a JSON object.
     * @param json - JSON object to create the {@link ContentLogin} from.
     * @returns A {@link ContentLogin} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentLogin | nothing;
    /**
     * The {@link User}'s login.
     */
    login: email | nothing;
    constructor(json: JsonObject);
    getKey(): email;
    toJSON(): JsonObject;
}
//# sourceMappingURL=ContentLogin.d.ts.map