import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamDispatchJobMerge } from "./Parameters/ParamDispatchJobMerge";

/**
 * Creates a new or updates an existing {@link DispatchJob}.
 **/
export class PayDispatchJobMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link DispatchJob}.
	 **/
	dispatchJob: ParamDispatchJobMerge;

	constructor(json: any) {
		super(json);
		this.dispatchJob = new ParamDispatchJobMerge(json?.dispatchJob);
	}
	
	/**
	 * 
	 **/
	getKey(): string {
		return this.dispatchJob?.id?.toString() ?? "";
	}
}