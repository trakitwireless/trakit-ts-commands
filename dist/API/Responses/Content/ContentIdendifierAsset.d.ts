import { JsonObject } from "@trakit/objects";
import { nothing, ulong } from "@trakit/objects";
import { ContentIdendifierCompany } from "./ContentIdendifierCompany";
/**
 * A container for the id, {@link Asset} id, and owning {@link Company.id} of the {@link Provider} requested/created.
 */
export declare class ContentIdendifierAsset extends ContentIdendifierCompany {
    /**
     * Creates a {@link ContentIdendifierAsset} from a JSON object.
     * @param json - JSON object to create the {@link ContentIdendifierAsset} from.
     * @returns A {@link ContentIdendifierAsset} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentIdendifierAsset | nothing;
    /**
     * Identifier of the {@link Asset} to which this object belongs.
     * <remarks>
     * This value must remain nullable because Providers can have a null value for their asset member.
     * </remarks>
     */
    asset: ulong | nothing;
    constructor(json: JsonObject);
    toJSON(): {
        asset: number | null;
        company: number | null;
    };
}
//# sourceMappingURL=ContentIdendifierAsset.d.ts.map