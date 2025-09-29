import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link formTemplate} object.
 */
export abstract class PayFormTemplate extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link FormTemplate}.
	 */
	formTemplate: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.formTemplate = new ParamId(json?.formTemplate);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.formTemplate?.id?.toString() ?? "";
	}
}