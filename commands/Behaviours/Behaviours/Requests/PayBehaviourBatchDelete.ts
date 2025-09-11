import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { nothing } from "@trakit/objects";

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
		this.behaviours = (json?.behaviours ?? []).map((item: any) => new ParamId(item));
	}
}