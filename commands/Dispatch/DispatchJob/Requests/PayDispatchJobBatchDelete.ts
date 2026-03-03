import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchJobBatchDelete } from "../Responses/RepDispatchJobBatchDelete";
import { PayDispatchJobSpecial } from "./PayDispatchJob";

/**
 * Deletes multiple {@link DispatchJob}s.
 */
export class PayDispatchJobBatchDelete extends PayDispatchJobSpecial {
	/**
	 * List of {@link DispatchJob.id}s to delete.
	 */
	dispatchJobs: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchJobs = (json?.dispatchJobs as JsonObject[])?.map((id: any) => new ParamId(id)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobBatchDelete(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			dispatchJobs: this.dispatchJobs.map((dj) => dj.toJSON()),
		};
	}
}