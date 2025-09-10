import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";

/**
 * 
 **/
export class PayAssetBatchDelete extends Payload {
	/**
	 * 
	 **/
	assets: ParamId[];
	
	constructor(json?: any) {
		super(json);
		this.assets = (json?.assets ?? []).map((id: any) => new ParamId(id));
	}
}