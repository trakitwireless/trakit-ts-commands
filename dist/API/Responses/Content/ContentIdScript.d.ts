import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";
/**
 * A container for the id, script id, and owning {@link Company.id} of the object requested/created.
 */
export declare class ContentIdScript extends ContentIdCompany {
    /**
     * Creates a {@link ContentIdScript} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdScript} from.
     * @returns A {@link ContentIdScript} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdScript | nothing;
    /**
     * Identifier of the script to which this object belongs.
     */
    script: ulong | nothing;
    constructor(json: JsonObject);
    toJSON(): {
        script: number | null;
        company: number | null;
    };
}
//# sourceMappingURL=ContentIdScript.d.ts.map