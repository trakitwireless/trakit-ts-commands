import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link behaviourScript} object.
 **/
export abstract class PayBehaviourScript extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link BehaviourScript}.
	 **/
	behaviourScript: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.behaviourScript = new ParamId(json?.behaviourScript as JsonObject);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.behaviourScript?.id?.toString() ?? "";
	}
}