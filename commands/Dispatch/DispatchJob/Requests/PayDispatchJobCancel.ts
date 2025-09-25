import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchJobMerge } from "../Responses/RepDispatchJobMerge";
import { ParamDispatchJobCancel } from "./Parameters/ParamDispatchJobCancel";
import { PayDispatchJobSpecial } from "./PayDispatchJob";

/**
 * Cancels a {@link DispatchJob}, removing it from the dispatcher's and driver's views.
 **/
export class PayDispatchJobCancel extends PayDispatchJobSpecial implements IPaySingle {
	/**
	 * Parameters given to cancel a {@link DispatchJob}.
	 **/
	dispatchJob: ParamDispatchJobCancel;

	constructor(json: any) {
		super(json);
		this.dispatchJob = new ParamDispatchJobCancel(json?.dispatchJob);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.dispatchJob.id.toString() ?? "";
	}

	override createReply(json: any): Reply {
		return new RepDispatchJobMerge(json);
	}
}