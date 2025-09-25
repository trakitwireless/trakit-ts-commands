import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link picture} object.
 **/
export abstract class PayPicture extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Picture}.
	 **/
	picture: ParamId;

	constructor(json: any) {
		super(json);
		this.picture = new ParamId(json?.picture);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.picture?.id?.toString() ?? "";
	}
}