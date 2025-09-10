import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * A container for the {@link assetMessage} object.
 **/
export abstract class PayAssetMessage extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link AssetMessage}.
	 **/
	assetMessage: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.assetMessage?.id.toString() ?? "";
		}}