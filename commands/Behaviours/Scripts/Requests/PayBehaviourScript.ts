import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the @link {behaviourScript} object.
 **/
export abstract class PayBehaviourScript extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the @link {BehaviourScript}.
	 **/
	behaviourScript: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.behaviourScript?.id.ToString() ?? "";
		}}