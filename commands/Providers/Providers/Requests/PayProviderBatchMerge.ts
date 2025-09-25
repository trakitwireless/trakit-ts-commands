import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderBatchMerge } from "../Responses/RepProviderBatchMerge";
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

	override createReply(json: any): Reply {
		return new RepProviderBatchMerge(json);
	}
}