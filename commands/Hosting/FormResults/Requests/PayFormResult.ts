import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link FormResult} object.
 **/
export abstract class PayFormResult extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link FormResult}.
	 */
	formResult: ParamId;

	constructor(json?: any) {
		super(json);
		this.formResult = new ParamId(json?.formResult);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.formResult?.id?.toString() ?? "";
	}
}