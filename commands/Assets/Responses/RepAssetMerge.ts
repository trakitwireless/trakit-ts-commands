import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link asset}.
 **/
export class RepAssetMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	asset: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = ContentIdCompany.fromJSON(json?.asset);
	}
}