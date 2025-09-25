import { Reply } from "../../../API/Responses/Reply";
import { ParamIdentifier } from "commands/API/Requests/Parameters/ParamIdentifier";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderBatchDelete } from "../Responses/RepProviderBatchDelete";

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