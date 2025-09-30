import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchTaskBatchDelete } from "../Responses/RepDispatchTaskBatchDelete";

/**
 * Deletes multiple {@link DispatchTask}s.
 **/
export class PayDispatchTaskBatchDelete extends Payload {
	/**
	 * List of {@link DispatchTask.id}s to delete.
	 **/
	dispatchTasks: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchTasks = (json?.dispatchTasks as JsonObject[])?.map((id: any) => new ParamId(id)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchTaskBatchDelete(json as JsonObject);
	}
}