import { nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link assetMessage}.
 **/
export class RepAssetMessageDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link AssetMessage}.
	 **/
	assetMessage: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.assetMessage = ContentIdDeleted.fromJSON(json?.assetMessage);
	}
}