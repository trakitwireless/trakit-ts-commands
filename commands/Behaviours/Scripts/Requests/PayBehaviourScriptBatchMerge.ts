import { Payload } from "../../../API/Requests/Payload";
import { ParamBehaviourScriptMerge } from "./Parameters/ParamBehaviourScriptMerge";

/**
 * 
 **/
export class PayBehaviourScriptBatchMerge extends Payload {
	/**
	 * 
	 **/
	behaviourScripts: ParamBehaviourScriptMerge[];

	constructor(json?: any) {
		super(json);
		this.behaviourScripts = (json?.behaviourScripts ?? []).map((x: any) => new ParamBehaviourScriptMerge(x));
	}
}