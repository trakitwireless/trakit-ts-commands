import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchTaskMerge } from "../Responses/RepDispatchTaskMerge";
import { ParamDispatchTaskMerge } from "./Parameters/ParamDispatchTaskMerge";

/**
 * Creates a new or updates an existing {@link DispatchTask}.
 */
export class PayDispatchTaskMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link DispatchTask}.
	 */
	dispatchTask: ParamDispatchTaskMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchTask = new ParamDispatchTaskMerge(json?.dispatchTask as JsonObject);
	}
	
	/**
	 * 
	 */
	getKey(): string {
		return this.dispatchTask?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchTaskMerge(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			dispatchTask: this.dispatchTask.toJSON()
		};
	}
}