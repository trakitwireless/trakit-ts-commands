import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";

/**
 * A container for the {@link providerConfiguration}.
 **/
export class RepProviderConfigurationMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	providerConfiguration: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerConfiguration = ContentIdCompany.fromJSON(json?.providerConfiguration);
	}
}