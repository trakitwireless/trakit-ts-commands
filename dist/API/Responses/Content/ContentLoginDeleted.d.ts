import { JsonObject, nothing, uint } from "@trakit/objects";
import { ContentLoginCompany } from "./ContentLoginCompany";
/**
 * For delete/restore commands, this contains the {@link User} login, version keys, owning {@link Company.id}, and deleted state.
 */
export declare class ContentLoginDeleted extends ContentLoginCompany {
    /**
     * Creates a {@link ContentLoginDeleted} from a JSON object.
     * @param json - JSON object to create the {@link ContentLoginDeleted} from.
     * @returns A {@link ContentLoginDeleted} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentLoginDeleted | nothing;
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
//# sourceMappingURL=ContentLoginDeleted.d.ts.map