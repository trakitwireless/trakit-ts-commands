import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "./ContentId";
import { IContentCompany } from "./IContentCompany";
/**
 * A container for the id and owning {@link Company.id} of the object requested/created.
 */
export declare class ContentIdCompany extends ContentId implements IContentCompany {
    /**
     * Creates a {@link ContentIdCompany} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdCompany} from.
     * @returns A {@link ContentIdCompany} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdCompany | nothing;
    /**
     * Identifier of the {@link Company} to which this object belongs.
     */
    company: ulong | nothing;
    constructor(json: JsonObject);
    getCompanyId(): ulong;
    toJSON(): {
        company: number | null;
    };
}
//# sourceMappingURL=ContentIdCompany.d.ts.map