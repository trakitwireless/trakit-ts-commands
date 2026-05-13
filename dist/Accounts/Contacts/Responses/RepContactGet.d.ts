import { Contact, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link contact}.
 */
export declare class RepContactGet extends ReplySyncGet<Contact> {
    /**
     * The requested {@link Contact}.
     */
    contact: Contact | nothing;
    constructor(json: JsonObject);
    getObject(): Contact;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepContactGet.d.ts.map