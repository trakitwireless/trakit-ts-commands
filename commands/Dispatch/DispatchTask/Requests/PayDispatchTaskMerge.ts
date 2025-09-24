import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamDispatchTaskMerge } from "./Parameters/ParamDispatchTaskMerge";

/**
 * Creates a new or updates an existing {@link DispatchTask}.
 **/
export class PayDispatchTaskMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link DispatchTask}.
	 **/
	dispatchTask: ParamDispatchTaskMerge;

	constructor(json: any) {
		super(json);
		this.dispatchTask = new ParamDispatchTaskMerge(json?.dispatchTask);
	}
	
	/**
	 * 
	 **/
	getKey(): string {
		return this.dispatchTask?.id?.toString() ?? "";
	}

	override createReply(json: any): Reply {
		return new RepDispatchTaskMerge(json);
	}
}