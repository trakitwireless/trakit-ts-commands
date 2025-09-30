import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link assetMessage}.
 **/
export class RepAssetMessageMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	assetMessage: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.assetMessage = ContentIdCompany.fromJSON(json?.assetMessage as JsonObject);
	}
}