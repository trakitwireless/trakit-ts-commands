import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { nothing } from "@trakit/objects";
import { RepBehaviourBatchDelete } from "../Responses/RepBehaviourBatchDelete";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class PayBehaviourBatchDelete extends Payload {
	/**
	 * 
	 **/
	behaviours: ParamId[] | nothing;

	constructor(json?: any) {
		super(json);
		this.behaviours = json?.behaviours?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepBehaviourBatchDelete(json);
	}
}