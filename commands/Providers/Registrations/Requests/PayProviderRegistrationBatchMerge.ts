import { Payload } from "../../../API/Requests/Payload";
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
}