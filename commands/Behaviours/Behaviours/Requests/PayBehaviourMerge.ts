import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="Behaviour"/>.
 **/
export class PayBehaviourMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="Behaviour"/>.
	 **/
	behaviour: ParamBehaviourMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.behaviour?.id?.ToString() ?? "";
		}}