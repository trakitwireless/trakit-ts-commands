import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";
/**
 * A container for the id, {@link BillingProfile.id}, and owning {@link Company.id} of the billing object requested/created.
 */
export declare class ContentIdBillingProfile extends ContentIdCompany {
    /**
     * Creates a {@link ContentIdBillingProfile} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdBillingProfile} from.
     * @returns A {@link ContentIdBillingProfile} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdBillingProfile | nothing;
    /**
     * Identifier of the {@link BillingProfile} to which this object belongs
     */
    profile: ulong | nothing;
    constructor(json: JsonObject);
    toJSON(): {
        profile: number | null;
        company: number | null;
    };
}
//# sourceMappingURL=ContentIdBillingProfile.d.ts.map