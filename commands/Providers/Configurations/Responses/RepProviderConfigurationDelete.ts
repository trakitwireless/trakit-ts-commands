import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link providerConfiguration}.
 **/
export class RepProviderConfigurationDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ProviderConfiguration}.
	 **/
	providerConfiguration: ContentIdDeleted | nothing;

	constructor(json: any) {
		super(json);
		this.providerConfiguration = ContentIdDeleted.fromJSON(json?.providerConfiguration);
	}
}