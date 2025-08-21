import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="AssetMessage"/>.
 **/
export class PayAssetMessageMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="AssetMessage"/>.
	 **/
	assetMessage: ParamAssetMessageMerge;

	/**
		///
	 **/
		getKey(): string {
			return  this.assetMessage?.id?.ToString() ?? "";
		}}