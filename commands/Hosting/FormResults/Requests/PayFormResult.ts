import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link FormResult} object.
 */
export abstract class PayFormResult extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link FormResult}.
	 */
	formResult: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.formResult = new ParamId(json?.formResult as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.formResult?.id?.toString() ?? "";
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			formResult: this.formResult.toJSON(),
		};
	}
}