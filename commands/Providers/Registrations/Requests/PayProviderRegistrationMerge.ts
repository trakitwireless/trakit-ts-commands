import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderRegistrationMerge } from "./Parameters/ParamProviderRegistrationMerge";
import { RepProviderRegistrationMerge } from "../Responses/RepProviderRegistrationMerge";

/**
 * Creates a new or updates an existing {@link ProviderRegistration}.
 **/
export class PayProviderRegistrationMerge extends Payload {
	/**
	 * Parameters given to create or update a {@link ProviderRegistration}.
	 **/
	providerRegistration: ParamProviderRegistrationMerge;

	constructor(json: any) {
		super(json);
		this.providerRegistration = new ParamProviderRegistrationMerge(json?.providerRegistration);
	}

	override createReply(json: any): Reply {
		return new RepProviderRegistrationMerge(json);
	}
}