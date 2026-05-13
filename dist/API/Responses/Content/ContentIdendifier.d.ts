import { ISerializable, JsonObject, nothing } from "@trakit/objects";
import { IContent } from "./IContent";
/**
 * A container for the id of the {@link Provider} requested/created.
 */
export declare class ContentIdendifier implements IContent, ISerializable {
    /**
     * Creates a {@link ContentId} from a JSON object.
     * @param json - JSON object to create the {@link ContentId} from.
     * @returns A {@link ContentId} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdendifier | nothing;
    /**
     * Identifier given as input for the command.
     */
    id: string | nothing;
    constructor(json: JsonObject);
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=ContentIdendifier.d.ts.map