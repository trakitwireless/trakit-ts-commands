import { nothing } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { ParamBehaviourMerge } from "./Parameters/ParamBehaviourMerge";

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
		this.behaviours = (json?.behaviours ?? []).map((item: any) => new ParamBehaviourMerge(item));
	}
}