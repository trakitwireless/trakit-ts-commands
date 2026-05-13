import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdendifier } from "./ContentIdendifier";
import { IContentCompany } from "./IContentCompany";
/**
 * A container for the id and owning {@link Company} of the {@link Provider} requested/created.
 */
export declare class ContentIdendifierCompany extends ContentIdendifier implements IContentCompany {
    /**
     * Creates a {@link ContentIdendifierCompany} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdendifierCompany} from.
     * @returns A {@link ContentIdendifierCompany} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdendifierCompany | nothing;
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
//# sourceMappingURL=ContentIdendifierCompany.d.ts.map