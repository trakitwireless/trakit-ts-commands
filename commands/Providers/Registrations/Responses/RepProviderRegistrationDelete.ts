import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link providerRegistration}.
 **/
export class RepProviderRegistrationDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ProviderRegistration}.
	 **/
	providerRegistration: ContentIdDeleted | nothing;

	constructor(json: any) {
		super(json);
		this.providerRegistration = ContentIdDeleted.fromJSON(json?.providerRegistration);
	}
}