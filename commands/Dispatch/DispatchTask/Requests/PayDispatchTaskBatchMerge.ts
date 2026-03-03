import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchTaskBatchMerge } from "../Responses/RepDispatchTaskBatchMerge";
import { ParamDispatchTaskMerge } from "./Parameters/ParamDispatchTaskMerge";

/**
 * Creates multiple new, or updates multiple existing {@link DispatchTask}s.
 */
export class PayDispatchTaskBatchMerge extends Payload {
	/**
	 * List of {@link DispatchTask}s to update or create.
	 */
	dispatchTasks: ParamDispatchTaskMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchTasks = (json?.dispatchTasks as JsonObject[])?.map((dt: any) => new ParamDispatchTaskMerge(dt)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchTaskBatchMerge(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			dispatchTasks: this.dispatchTasks.map(dt => dt.toJSON()),
		};
	}
}