import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";

/**
 * A container for the {@link assetMessage} object.
 **/
export abstract class PayAssetMessage extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link AssetMessage}.
	 **/
	assetMessage: ParamId;

	constructor(json: any) {
		super();
		this.assetMessage = new ParamId(json?.assetMessage);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.assetMessage?.id?.toString() ?? "";
	}
}