import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamDispatchJobMerge } from "./Parameters/ParamDispatchJobMerge";
import { RepDispatchJobMerge } from "../Responses/RepDispatchJobMerge";

/**
 * Creates a new or updates an existing {@link DispatchJob}.
 **/
export class PayDispatchJobMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link DispatchJob}.
	 **/
	dispatchJob: ParamDispatchJobMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchJob = new ParamDispatchJobMerge(json?.dispatchJob as JsonObject);
	}
	
	/**
	 * 
	 **/
	getKey(): string {
		return this.dispatchJob?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobMerge(json as JsonObject);
	}
}