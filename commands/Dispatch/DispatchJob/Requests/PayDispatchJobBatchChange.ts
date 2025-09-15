import { Payload } from "../../../API/Requests/Payload";
import { ParamDispatchJobChange } from "./Parameters/ParamDispatchJobChange";

/**
 * Completes or modifies multiple existing {@link DispatchJob}s from a driver's perspective.
 **/
export class PayDispatchJobBatchChange extends Payload {
	/**
	 * List of {@link DispatchJob}s to update or create.
	 **/
	dispatchJobs: ParamDispatchJobChange[];

	constructor(json: any) {
		super(json);
		this.dispatchJobs = (json?.dispatchJobs ?? []).map((dj: any) => new ParamDispatchJobChange(dj));
	}
}