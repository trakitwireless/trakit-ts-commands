import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourMerge } from "../Responses/RepBehaviourMerge";
import { ParamBehaviourMerge } from "./Parameters/ParamBehaviourMerge";

/**
 * Creates a new or updates an existing {@link Behaviour}.
 */
export class PayBehaviourMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Behaviour}.
	 */
	behaviour: ParamBehaviourMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.behaviour = new ParamBehaviourMerge(json?.behaviour as JsonObject);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.behaviour?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourMerge(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			behaviour: this.behaviour.toJSON(),
		};
	}
}