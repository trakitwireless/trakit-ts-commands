import { JsonObject, nothing } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourBatchMerge } from "../Responses/RepBehaviourBatchMerge";
import { ParamBehaviourMerge } from "./Parameters/ParamBehaviourMerge";

/**
 * 
 **/
export class PayBehaviourBatchMerge extends Payload {
	/**
	 * 
	 **/
	behaviours: ParamBehaviourMerge[] | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.behaviours = (json?.behaviours as JsonObject[])?.map((item: any) => new ParamBehaviourMerge(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourBatchMerge(json as JsonObject);
	}
}