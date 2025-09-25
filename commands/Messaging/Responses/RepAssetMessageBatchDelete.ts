import { nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";

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