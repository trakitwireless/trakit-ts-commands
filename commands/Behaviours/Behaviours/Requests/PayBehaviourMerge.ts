import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamBehaviourMerge } from "./Parameters/ParamBehaviourMerge";
import { RepBehaviourMerge } from "../Responses/RepBehaviourMerge";

/**
 * Creates a new or updates an existing {@link Behaviour}.
 **/
export class PayBehaviourMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Behaviour}.
	 **/
	behaviour: ParamBehaviourMerge;

	constructor(json?: any) {
		super(json);
		this.behaviour = new ParamBehaviourMerge(json?.behaviour);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.behaviour?.id?.toString() ?? "";
	}

	override createReply(json: any): Reply {
		return new RepBehaviourMerge(json);
	}
}