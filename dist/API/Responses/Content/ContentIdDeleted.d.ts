import { JsonObject, nothing, uint } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";
/**
 * For delete/restore commands, this contains the id, version keys, owning {@link Company.id}, and deleted state.
 */
export declare class ContentIdDeleted extends ContentIdCompany {
    /**
     * Creates a {@link ContentIdDeleted} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdDeleted} from.
     * @returns A {@link ContentIdDeleted} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdDeleted | nothing;
    /**
     * Flag showing if the object is deleted.
     */
    deleted: boolean;
    /**
     * Object version keys used to validate synchronization for all object properties.
     */
    v: uint[];
    constructor(json: JsonObject);
    toJSON(): {
        deleted: boolean;
        v: number[];
        company: number | null;
    };
}
//# sourceMappingURL=ContentIdDeleted.d.ts.map