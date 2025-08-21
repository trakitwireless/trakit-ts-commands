import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the <see cref="assetMessage"/>.
 **/
export class RepAssetMessageDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="AssetMessage"/>.
	 **/
	assetMessage: ContentIdDeleted;}