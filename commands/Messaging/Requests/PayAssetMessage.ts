import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="assetMessage"/> object.
 **/
export abstract class PayAssetMessage extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="AssetMessage"/>.
	 **/
	assetMessage: ParamId;

	/**
		///
	 **/
		getKey(): string {
			return  this.assetMessage?.id.ToString() ?? "";
		}}