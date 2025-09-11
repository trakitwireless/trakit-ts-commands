import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Completes or modifies an existing {@link DispatchJob} from a driver's perspective.
 * This can be used by dispatchers to accomodate thrid-party delivery systems, or correcting errors from drivers.
 **/
export class PayDispatchJobChange extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link DispatchJob}.
	 **/
	dispatchJob: ParamDispatchJobChange;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.dispatchJob?.id?.toString() ?? "";
		}}