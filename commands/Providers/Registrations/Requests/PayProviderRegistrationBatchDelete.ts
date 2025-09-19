import { ParamCode } from "commands/API/Requests/Parameters/ParamCode";
import { Payload } from "../../../API/Requests/Payload";

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
}