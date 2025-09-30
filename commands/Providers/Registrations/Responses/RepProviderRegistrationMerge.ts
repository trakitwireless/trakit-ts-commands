import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerRegistration}.
 **/
export class RepProviderRegistrationMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	providerRegistration: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerRegistration = ContentIdCompany.fromJSON(json?.providerRegistration as JsonObject);
	}
}