import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";
/**
 * A container for the id, owning {@link ReportTemplate} id, and owning {@link Company.id} of the report object requested/created.
 */
export declare class ContentIdCompanyTemplate extends ContentIdCompany {
    /**
     * Creates a {@link ContentIdCompanyTemplate} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdCompanyTemplate} from.
     * @returns A {@link ContentIdCompanyTemplate} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdCompanyTemplate | nothing;
    /**
     * Identifier of the template to which this object belongs.
     */
    template: ulong | nothing;
    constructor(json: JsonObject);
    toJSON(): {
        template: number | null;
        company: number | null;
    };
}
//# sourceMappingURL=ContentIdCompanyTemplate.d.ts.map