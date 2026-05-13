import { ISerializable, JsonObject, nothing } from "@trakit/objects";
import { IContent } from "./IContent";
/**
 * A container for the key of the {@link Machine} requested/created.
 */
export declare class ContentKey implements IContent, ISerializable {
    /**
     * Creates a {@link ContentId} from a JSON object.
     * @param json - JSON object to create the {@link ContentId} from.
     * @returns A {@link ContentId} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentKey | nothing;
    /**
     * The {@link Machine}'s key.
     */
    key: string | nothing;
    constructor(json: JsonObject);
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=ContentKey.d.ts.map