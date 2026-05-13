import { JsonObject, nothing, uint } from "@trakit/objects";
import { ContentIdParent } from "./ContentIdParent";
/**
 * For delete/restore commands, this contains the id, owning {@link Company.parent}, and deleted state.
 */
export declare class ContentIdParentDeleted extends ContentIdParent {
    /**
     * Creates a {@link ContentIdParentDeleted} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdParentDeleted} from.
     * @returns A {@link ContentIdParentDeleted} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdParentDeleted | nothing;
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
        parent: number | null;
    };
}
//# sourceMappingURL=ContentIdParentDeleted.d.ts.map