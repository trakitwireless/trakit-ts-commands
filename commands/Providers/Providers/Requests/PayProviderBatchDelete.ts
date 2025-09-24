import { ParamIdentifier } from "commands/API/Requests/Parameters/ParamIdentifier";
import { Payload } from "../../../API/Requests/Payload";

/**
 * 
 **/
export class PayProviderBatchDelete extends Payload {
	/**
	 * 
	 **/
	providers: ParamIdentifier[];

	constructor(json: any) {
		super(json);
		this.providers = json?.providers?.map((item: any) => new ParamIdentifier(item)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepProviderBatchDelete(json);
	}
}