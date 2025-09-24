import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamMachineMerge } from "./Parameters/ParamMachineMerge";
import { RepMachineBatchMerge } from "../Responses/RepMachineBatchMerge";

/**
 * 
 **/
export class PayMachineBatchMerge extends Payload {
	/**
	 * 
	 **/
	machines: ParamMachineMerge[];

	constructor(json: any) {
		super(json);
		this.machines = json?.machines.map((m: any) => new ParamMachineMerge(m)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepMachineBatchMerge(json);
	}
}