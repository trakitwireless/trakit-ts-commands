import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentKey } from "./ContentKey";
import { IContentCompany } from "./IContentCompany";
/**
 * A container for the {@link Machine.key} and owning {@link Company.id} of the {@link Machine} requested/created.
 */
export declare class ContentKeyCompany extends ContentKey implements IContentCompany {
    /**
     * Creates a {@link ContentKeyCompany} from a JSON object.
     * @param json - JSON object to create the {@link ContentKeyCompany} from.
     * @returns A {@link ContentKeyCompany} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentKeyCompany | nothing;
    /**
     * Identifier of the {@link Company} to which the {@link Machine} belongs.
     */
    company: ulong | nothing;
    constructor(json: JsonObject);
    getCompanyId(): ulong;
    toJSON(): {
        company: number | null;
    };
}
//# sourceMappingURL=ContentKeyCompany.d.ts.map