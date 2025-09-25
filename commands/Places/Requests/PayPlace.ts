import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamId } from "../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link place} object.
 */
export abstract class PayPlace extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Place}.
	 */
	place: ParamId;

	constructor(json?: any) {
		super(json);
		this.place = new ParamId(json?.place);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.place?.id?.toString() ?? "";
	}
}