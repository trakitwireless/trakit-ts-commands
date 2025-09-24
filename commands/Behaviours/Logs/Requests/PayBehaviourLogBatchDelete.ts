import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepBehaviourLogBatchDelete } from "../Responses/RepBehaviourLogBatchDelete";

/**
 * 
 **/
export class PayBehaviourLogBatchDelete extends Payload {
	/**
	 * 
	 **/
	behaviourLogs: ParamId[];

	constructor(json?: any) {
		super(json);
		this.behaviourLogs = json?.behaviourLogs?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepBehaviourLogBatchDelete(json);
	}
}