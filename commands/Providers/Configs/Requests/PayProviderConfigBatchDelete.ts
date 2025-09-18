import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * 
 **/
export class PayProviderConfigBatchDelete extends Payload {
	/**
	 * 
	 **/
	providerConfigs: ParamId[];

	constructor(json: any) {
		super(json);
		this.providerConfigs = json?.providerConfigs?.map((e: any) => new ParamId(e)) ?? [];
	}
}