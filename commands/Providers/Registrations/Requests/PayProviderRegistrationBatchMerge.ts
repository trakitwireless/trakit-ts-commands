import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderRegistrationBatchMerge } from "../Responses/RepProviderRegistrationBatchMerge";
import { ParamProviderRegistrationMerge } from "./Parameters/ParamProviderRegistrationMerge";

/**
 * 
 **/
export class PayProviderRegistrationBatchMerge extends Payload {
	/**
	 * 
	 **/
	providerRegistrations: ParamProviderRegistrationMerge[];

	constructor(json: any) {
		super(json);
		this.providerRegistrations = json?.providerRegistrations?.map((e: any) => new ParamProviderRegistrationMerge(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepProviderRegistrationBatchMerge(json);
	}
}