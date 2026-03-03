import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link behaviour} object.
 */
export abstract class PayBehaviour extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Behaviour}.
	 */
	behaviour: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.behaviour = new ParamId(json?.behaviour as JsonObject);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.behaviour?.id?.toString() ?? "";
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			behaviour: this.behaviour.toJSON(),
		};
	}
}