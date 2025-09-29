import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamId } from "../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link asset} object.
 **/
export abstract class PayAsset extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Asset}.
	 **/
	asset: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamId(json?.asset);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.asset?.id?.toString() ?? "";
	}
}