import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing @link {Machine}.
 **/
export class PayMachineMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a @link {Machine}.
	 **/
	machine: ParamMachineMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.machine?.key ?? "";
		}}