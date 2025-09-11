import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * 
 **/
export class PayBehaviourScriptBatchDelete extends Payload {
	/**
	 * 
	 **/
	behaviourScripts: ParamId[];

	constructor(json?: any) {
		super(json);
		this.behaviourScripts = (json?.behaviourScripts ?? []).map((x: any) => new ParamId(x));
	}
}