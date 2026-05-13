import { ISerializable, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "./ContentId";
import { IContentCompany } from "./IContentCompany";
/**
 * A container for the id and the requested/created {@link Company.parent}.
 */
export declare class ContentIdParent extends ContentId implements IContentCompany, ISerializable {
    /**
     * Creates a {@link ContentIdParent} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdParent} from.
     * @returns A {@link ContentIdParent} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdParent | nothing;
    /**
     * Identifier of the parent to which this company belongs
     */
    parent: ulong | nothing;
    constructor(json: JsonObject);
    getCompanyId(): ulong;
    toJSON(): {
        parent: number | null;
    };
}
//# sourceMappingURL=ContentIdParent.d.ts.map