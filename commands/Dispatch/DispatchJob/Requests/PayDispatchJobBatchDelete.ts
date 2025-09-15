import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * Deletes multiple {@link DispatchJob}s.
 **/
export class PayDispatchJobBatchDelete extends Payload {
	/**
	 * List of {@link DispatchJob.id}s to delete.
	 **/
	dispatchJobs: ParamId[];

	constructor(json: any) {
		super(json);
		this.dispatchJobs = (json?.dispatchJobs ?? []).map((id: any) => new ParamId(id));
	}
}