import { Payload } from "../../../API/Requests/Payload";
import { ParamDispatchJobCancel } from "./Parameters/ParamDispatchJobCancel";

/**
 * Cancels multiple existing {@link DispatchJob}s, removing them from the dispatcher's and driver's views.
 **/
export class PayDispatchJobBatchCancel extends Payload {
	/**
	 * List of {@link DispatchJob}s to update or create.
	 **/
	dispatchJobs: ParamDispatchJobCancel[];

	constructor(json: any) {
		super(json);
		this.dispatchJobs = (json?.dispatchJobs ?? []).map((dj: any) => new ParamDispatchJobCancel(dj));
	}
}