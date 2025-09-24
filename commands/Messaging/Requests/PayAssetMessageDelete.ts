import { PayAssetMessage } from "./PayAssetMessage";

/**
 * Deletes an existing {@link AssetMessage}.
 **/
export class PayAssetMessageDelete extends PayAssetMessage { 
	override createReply(json: any): Reply {
		return new RepAssetMessageDelete(json);
	}
}