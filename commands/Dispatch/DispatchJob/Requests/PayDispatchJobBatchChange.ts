import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchJobBatchMerge } from "../Responses/RepDispatchJobBatchMerge";
import { ParamDispatchJobChange } from "./Parameters/ParamDispatchJobChange";
import { PayDispatchJobSpecial } from "./PayDispatchJob";

/**
 * Completes or modifies multiple existing {@link DispatchJob}s from a driver's perspective.
 */
export class PayDispatchJobBatchChange extends PayDispatchJobSpecial {
	/**
	 * List of {@link DispatchJob}s to update or create.
	 */
	dispatchJobs: ParamDispatchJobChange[];

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchJobs = (json?.dispatchJobs as JsonObject[])?.map((dj: any) => new ParamDispatchJobChange(dj)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobBatchMerge(json);
	}
}