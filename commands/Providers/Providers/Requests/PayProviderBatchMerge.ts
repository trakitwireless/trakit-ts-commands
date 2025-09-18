import { Payload } from "../../../API/Requests/Payload";
import { ParamProviderMerge } from "./Parameters/ParamProviderMerge";

/**
 * 
 **/
export class PayProviderBatchMerge extends Payload {
	/**
	 * 
	 **/
	providers: ParamProviderMerge[];

	constructor(json: any) {
		super(json);
		this.providers = json?.providers?.map((item: any) => new ParamProviderMerge(item)) ?? [];
	}
}