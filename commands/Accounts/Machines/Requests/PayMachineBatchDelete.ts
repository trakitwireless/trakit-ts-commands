import { ParamKey } from "../../../API/Requests/Parameters/ParamKey";
import { Payload } from "../../../API/Requests/Payload";

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
}