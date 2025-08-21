import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="DispatchTask"/>.
 **/
export class PayDispatchTaskMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="DispatchTask"/>.
	 **/
	dispatchTask: ParamDispatchTaskMerge;

	/**
		///
	 **/
		getKey(): string {
			return  this.dispatchTask?.id?.ToString() ?? "";
		}}