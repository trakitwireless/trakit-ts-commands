import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";

/**
 * A container for the {@link providerConfig}.
 **/
export class RepProviderConfigMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	providerConfig: ContentIdCompany | nothing;

	constructor(json: any) {
		super(json);
		this.providerConfig = ContentIdCompany.fromJSON(json?.providerConfig);
	}
}