import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchJobBatchMerge } from "../Responses/RepDispatchJobBatchMerge";
import { ParamDispatchJobCancel } from "./Parameters/ParamDispatchJobCancel";
import { PayDispatchJobSpecial } from "./PayDispatchJob";

/**
 * Cancels multiple existing {@link DispatchJob}s, removing them from the dispatcher's and driver's views.
 */
export class PayDispatchJobBatchCancel extends PayDispatchJobSpecial {
	/**
	 * List of {@link DispatchJob}s to update or create.
	 */
	dispatchJobs: ParamDispatchJobCancel[];

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchJobs = (json?.dispatchJobs as JsonObject[])?.map((dj: any) => new ParamDispatchJobCancel(dj)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobBatchMerge(json);
	}
}