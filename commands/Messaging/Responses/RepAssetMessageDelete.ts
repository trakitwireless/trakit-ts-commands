import { nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link assetMessage}.
 **/
export class RepAssetMessageDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link AssetMessage}.
	 **/
	assetMessage: ContentIdDeleted | nothing;

	constructor(json: any) {
		super(json);
		this.assetMessage = ContentIdDeleted.fromJSON(json?.assetMessage);
	}
}