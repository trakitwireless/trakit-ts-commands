import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamDispatchJobCancel } from "./Parameters/ParamDispatchJobCancel";

/**
 * Cancels a {@link DispatchJob}, removing it from the dispatcher's and driver's views.
 **/
export class PayDispatchJobCancel extends Payload implements IPaySingle {
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
		return new RepDispatchJobCancel(json);
	}
}