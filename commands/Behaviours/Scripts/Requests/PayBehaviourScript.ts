import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";

/**
 * A container for the {@link behaviourScript} object.
 **/
export abstract class PayBehaviourScript extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link BehaviourScript}.
	 **/
	behaviourScript: ParamId;

	constructor(json?: any) {
		super(json);
		this.behaviourScript = new ParamId(json?.behaviourScript);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.behaviourScript?.id?.toString() ?? "";
	}
}