import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamDispatchTaskMerge } from "./Parameters/ParamDispatchTaskMerge";
import { RepDispatchTaskMerge } from "../Responses/RepDispatchTaskMerge";

/**
 * Creates a new or updates an existing {@link DispatchTask}.
 **/
export class PayDispatchTaskMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link DispatchTask}.
	 **/
	dispatchTask: ParamDispatchTaskMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchTask = new ParamDispatchTaskMerge(json?.dispatchTask as JsonObject);
	}
	
	/**
	 * 
	 **/
	getKey(): string {
		return this.dispatchTask?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchTaskMerge(json as JsonObject);
	}
}