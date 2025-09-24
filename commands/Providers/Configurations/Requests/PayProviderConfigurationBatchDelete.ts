import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * 
 **/
export class PayProviderConfigurationBatchDelete extends Payload {
	/**
	 * 
	 **/
	providerConfigurations: ParamId[];

	constructor(json: any) {
		super(json);
		this.providerConfigurations = json?.providerConfigurations?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepProviderConfigurationBatchDelete(json);
	}
}