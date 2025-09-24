import { Payload } from "../../../API/Requests/Payload";
import { ParamDispatchJobMerge } from "./Parameters/ParamDispatchJobMerge";

/**
 * Creates multiple new, or updates multiple existing {@link DispatchJob}s.
 **/
export class PayDispatchJobBatchMerge extends Payload {
	/**
	 * List of {@link DispatchJob}s to update or create.
	 **/
	dispatchJobs: ParamDispatchJobMerge[];

	constructor(json: any) {
		super(json);
		this.dispatchJobs = json?.dispatchJobs?.map((dj: any) => new ParamDispatchJobMerge(dj)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepDispatchJobBatchMerge(json);
	}
}