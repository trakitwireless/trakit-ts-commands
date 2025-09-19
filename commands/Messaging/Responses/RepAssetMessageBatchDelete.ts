import { nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link assetMessage}.
 **/
export class RepAssetMessageBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link AssetMessage}.
	 **/
	assetMessages: ContentIdDeleted[] | nothing;

	constructor(json: any) {
		super(json);
		this.assetMessages = json?.assetMessages?.map((v: any) => ContentIdDeleted.fromJSON(v));
	}
}