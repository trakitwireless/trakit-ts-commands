import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourLogBatchDelete } from "../Responses/RepBehaviourLogBatchDelete";

/**
 * 
 **/
export class PayBehaviourLogBatchDelete extends Payload {
	/**
	 * 
	 **/
	behaviourLogs: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.behaviourLogs = (json?.behaviourLogs as JsonObject[])?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourLogBatchDelete(json as JsonObject);
	}
}