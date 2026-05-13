import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentCode } from "./ContentCode";
import { IContentCompany } from "./IContentCompany";
/**
 * A container for the id and owning {@link Company} of the {@link ProviderRegistration} requested/created.
 */
export declare class ContentCodeCompany extends ContentCode implements IContentCompany {
    /**
     * Creates a {@link ContentCodeCompany} from a JSON object.
     * @param json - JSON object to create the {@link ContentCodeCompany} from.
     * @returns A {@link ContentCodeCompany} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentCodeCompany | nothing;
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
//# sourceMappingURL=ContentCodeCompany.d.ts.map