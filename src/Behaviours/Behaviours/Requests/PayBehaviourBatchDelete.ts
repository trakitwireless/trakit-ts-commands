import { JsonObject, nothing } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourBatchDelete } from "../Responses/RepBehaviourBatchDelete";

/**
 * 
 */
export class PayBehaviourBatchDelete extends Payload {
	/**
	 * 
	 */
	behaviours: ParamId[] | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.behaviours = (json?.behaviours as JsonObject[])?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourBatchDelete(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			behaviours: this.behaviours?.map(b => b.toJSON()) ?? null,
		};
	}
}