import { JsonObject, nothing, uint } from "@trakit/objects";
import { ContentIdendifierCompany } from "./ContentIdendifierCompany";
/**
 * For delete/restore commands, this contains the {@link Provider.id}, version keys, owning {@link Company.id}, and deleted state.
 */
export declare class ContentIdendifierDeleted extends ContentIdendifierCompany {
    /**
     * Creates a {@link ContentIdendifierDeleted} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdendifierDeleted} from.
     * @returns A {@link ContentIdendifierDeleted} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdendifierDeleted | nothing;
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
//# sourceMappingURL=ContentIdendifierDeleted.d.ts.map