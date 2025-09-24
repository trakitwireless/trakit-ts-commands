import { Payload } from "../../../API/Requests/Payload";
import { ParamDispatchTaskMerge } from "./Parameters/ParamDispatchTaskMerge";

/**
 * Creates multiple new, or updates multiple existing {@link DispatchTask}s.
 **/
export class PayDispatchTaskBatchMerge extends Payload {
	/**
	 * List of {@link DispatchTask}s to update or create.
	 **/
	dispatchTasks: ParamDispatchTaskMerge[];

	constructor(json: any) {
		super(json);
		this.dispatchTasks = json?.dispatchTasks?.map((dt: any) => new ParamDispatchTaskMerge(dt)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepDispatchTaskBatchMerge(json);
	}
}