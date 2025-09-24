import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { ParamBehaviourMerge } from "./Parameters/ParamBehaviourMerge";
import { RepBehaviourBatchMerge } from "../Responses/RepBehaviourBatchMerge";

/**
 * 
 **/
export class PayBehaviourBatchMerge extends Payload {
	/**
	 * 
	 **/
	behaviours: ParamBehaviourMerge[] | nothing;

	constructor(json?: any) {
		super(json);
		this.behaviours = json?.behaviours?.map((item: any) => new ParamBehaviourMerge(item)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepBehaviourBatchMerge(json);
	}
}