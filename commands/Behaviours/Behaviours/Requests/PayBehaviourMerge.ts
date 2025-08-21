import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing @link {Behaviour}.
 **/
export class PayBehaviourMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a @link {Behaviour}.
	 **/
	behaviour: ParamBehaviourMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.behaviour?.id?.ToString() ?? "";
		}}