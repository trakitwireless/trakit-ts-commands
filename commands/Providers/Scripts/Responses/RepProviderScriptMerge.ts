import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link providerScript}.
 **/
export class RepProviderScriptMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	providerScript: ContentIdCompany | nothing;
	
	constructor(json: any) {
		super(json);
		this.providerScript = ContentIdCompany.fromJSON(json?.providerScript);
	}
}