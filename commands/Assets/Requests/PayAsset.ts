import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";

/**
 * A container for the {@link asset} object.
 */
export abstract class PayAsset extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Asset}.
	 */
	asset: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamId(json?.asset as JsonObject);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.asset?.id?.toString() ?? "";
	}
}