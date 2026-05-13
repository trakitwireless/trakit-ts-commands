import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";
/**
 * A container for the id, owning {@link Asset.id}, and owning {@link Company.id} of the object requested/created.
 */
export declare class ContentIdAsset extends ContentIdCompany {
    /**
     * Creates a {@link ContentIdAsset} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdAsset} from.
     * @returns A {@link ContentIdAsset} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdAsset | nothing;
    /**
     * Identifier of the {@link Asset} to which this object belongs
     */
    asset: ulong | nothing;
    constructor(json: JsonObject);
    toJSON(): {
        asset: number | null;
        company: number | null;
    };
}
//# sourceMappingURL=ContentIdAsset.d.ts.map