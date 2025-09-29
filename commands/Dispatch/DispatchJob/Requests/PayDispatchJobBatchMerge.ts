import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchJobBatchMerge } from "../Responses/RepDispatchJobBatchMerge";
import { ParamDispatchJobMerge } from "./Parameters/ParamDispatchJobMerge";
import { PayDispatchJobSpecial } from "./PayDispatchJob";

/**
 * Creates multiple new, or updates multiple existing {@link DispatchJob}s.
 **/
export class PayDispatchJobBatchMerge extends PayDispatchJobSpecial {
	/**
	 * List of {@link DispatchJob}s to update or create.
	 **/
	dispatchJobs: ParamDispatchJobMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchJobs = json?.dispatchJobs?.map((dj: any) => new ParamDispatchJobMerge(dj)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepDispatchJobBatchMerge(json);
	}
}