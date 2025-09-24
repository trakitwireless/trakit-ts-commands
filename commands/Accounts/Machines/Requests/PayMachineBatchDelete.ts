import { Reply } from "../../../API/Responses/Reply";
import { ParamKey } from "../../../API/Requests/Parameters/ParamKey";
import { Payload } from "../../../API/Requests/Payload";
import { RepMachineBatchDelete } from "../Responses/RepMachineBatchDelete";

/**
 * 
 **/
export class PayMachineBatchDelete extends Payload {
	/**
	 * 
	 **/
	machines: ParamKey[];

	constructor(json: any) {
		super(json);
		this.machines = json?.machines.map((m: any) => new ParamKey(m)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepMachineBatchDelete(json);
	}
}