import { Reply } from "../../../API/Responses/Reply";
import { ParamCode } from "../../../API/Requests/Parameters/ParamCode";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderRegistrationBatchDelete } from "../Responses/RepProviderRegistrationBatchDelete";

/**
 * 
 **/
export class PayProviderRegistrationBatchDelete extends Payload {
	/**
	 * 
	 **/
	providerRegistrations: ParamCode[];

	constructor(json: any) {
		super(json);
		this.providerRegistrations = json?.providerRegistrations?.map((e: any) => new ParamCode(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepProviderRegistrationBatchDelete(json);
	}
}