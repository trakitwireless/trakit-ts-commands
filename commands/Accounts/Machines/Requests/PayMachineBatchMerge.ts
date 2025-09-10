import { Payload } from "../../../API/Requests/Payload";
import { ParamMachineMerge } from "./Parameters/ParamMachineMerge";

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
}