import { JsonObject, nothing } from "@trakit/objects";
import { ContentCodeCompany } from "./ContentCodeCompany";
/**
 * A container for the id of the {@link ProviderRegistration} requested/created.
 * For delete/restore commands, this contains the {@link ProviderRegistration.code}, owning {@link Company.id}, and deleted state.
 */
export declare class ContentCodeDeleted extends ContentCodeCompany {
    /**
     * Creates a {@link ContentCodeDeleted} from a JSON object.
     * @param json - JSON object to create the {@link ContentCodeDeleted} from.
     * @returns A {@link ContentCodeDeleted} instance or nothing.
     */
    static fromJSON(json: JsonObject): ContentCodeDeleted | nothing;
    /**
     * Flag showing if the object is deleted.
     */
    deleted: boolean;
    constructor(json: JsonObject);
    toJSON(): {
        deleted: boolean;
        company: number | null;
    };
}
//# sourceMappingURL=ContentCodeDeleted.d.ts.map