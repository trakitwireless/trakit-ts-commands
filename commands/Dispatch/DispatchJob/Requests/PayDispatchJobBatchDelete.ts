import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchJobBatchDelete } from "../Responses/RepDispatchJobBatchDelete";
import { PayDispatchJobSpecial } from "./PayDispatchJob";

/**
 * Deletes multiple {@link DispatchJob}s.
 **/
export class PayDispatchJobBatchDelete extends PayDispatchJobSpecial {
	/**
	 * List of {@link DispatchJob.id}s to delete.
	 **/
	dispatchJobs: ParamId[];

	constructor(json: any) {
		super(json);
		this.dispatchJobs = json?.dispatchJobs?.map((id: any) => new ParamId(id)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepDispatchJobBatchDelete(json);
	}
}