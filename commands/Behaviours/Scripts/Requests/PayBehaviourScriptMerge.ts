import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="BehaviourScript"/>.
 **/
export class PayBehaviourScriptMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="BehaviourScript"/>.
	 **/
	behaviourScript: ParamBehaviourScriptMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.behaviourScript?.id?.ToString() ?? "";
		}}