import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * 
 **/
export class PayBehaviourLogBatchDelete extends Payload {
	/**
	 * 
	 **/
	behaviourLogs: ParamId[];

	constructor(json?: any) {
		super(json);
		this.behaviourLogs = json?.behaviourLogs?.map((item: any) => new ParamId(item)) ?? [];
	}
}