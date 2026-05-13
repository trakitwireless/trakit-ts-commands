import { JsonObject, nothing, uint } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";
/**
 * For suspend/revive commands, this contains the id, version keys, owning {@link Company.id}, and suspended state.
 */
export declare class ContentIdSuspended extends ContentIdCompany {
    /**
     * Creates a {@link ContentIdSuspended} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdSuspended} from.
     * @returns A {@link ContentIdSuspended} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdSuspended | nothing;
    /**
     * Flag showing if the object is suspended.
     */
    suspended: boolean;
    /**
     * Object version keys used to validate synchronization for all object properties.
     */
    v: uint[];
    constructor(json: JsonObject);
    toJSON(): {
        suspended: boolean;
        v: number[];
        company: number | null;
    };
}
//# sourceMappingURL=ContentIdSuspended.d.ts.map