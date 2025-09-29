import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link icon} object.
 **/
export abstract class PayIcon extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Icon}.
	 **/
	icon: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.icon = new ParamId(json?.icon);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.icon?.id?.toString() ?? "";
	}
}