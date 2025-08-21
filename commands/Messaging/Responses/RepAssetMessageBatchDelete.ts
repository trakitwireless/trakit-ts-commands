import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link assetMessage}.
 **/
export class RepAssetMessageBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link AssetMessage}.
	 **/
	assetMessages: ContentIdDeleted[];}