import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * Deletes multiple {@link DispatchTask}s.
 **/
export class PayDispatchTaskBatchDelete extends Payload {
	/**
	 * List of {@link DispatchTask.id}s to delete.
	 **/
	dispatchTasks: ParamId[];

	constructor(json: any) {
		super(json);
		this.dispatchTasks = json?.dispatchTasks?.map((id: any) => new ParamId(id)) ?? [];
	}
}