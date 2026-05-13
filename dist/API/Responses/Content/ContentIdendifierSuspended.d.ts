import { JsonObject } from "@trakit/objects";
import { nothing, uint } from "@trakit/objects";
import { ContentIdendifierCompany } from "./ContentIdendifierCompany";
/**
 * For suspend/revive commands, this contains the {@link Provider} id, version keys, owning {@link Company.id}, and suspended state.
 */
export declare class ContentIdendifierSuspended extends ContentIdendifierCompany {
    /**
     * Creates a {@link ContentIdendifierSuspended} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdendifierSuspended} from.
     * @returns A {@link ContentIdendifierSuspended} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdendifierSuspended | nothing;
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
//# sourceMappingURL=ContentIdendifierSuspended.d.ts.map