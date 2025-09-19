import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "commands";

/**
 * A container for the {@link providerRegistration}.
 **/
export class RepProviderRegistrationMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	providerRegistration: ContentIdCompany | nothing;

	constructor(json: any) {
		super(json);
		this.providerRegistration = ContentIdCompany.fromJSON(json?.providerRegistration);
	}
}