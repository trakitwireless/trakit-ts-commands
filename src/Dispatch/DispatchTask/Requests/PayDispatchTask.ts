import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link dispatchTask} object.
 */
export abstract class PayDispatchTask extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link DispatchTask}.
	 */
	dispatchTask: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchTask = new ParamId(json?.dispatchTask as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.dispatchTask?.id?.toString() ?? "";
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			dispatchTask: this.dispatchTask.toJSON()
		};
	}
}