import { Payload } from "../../API/Requests/Payload";
import { ParamContactMerge } from "./Parameters/ParamContactMerge";

/**
 * 
 **/
export class PayContactBatchMerge extends Payload {
	/**
	 * 
	 **/
	contacts: ParamContactMerge[];

	constructor(json: any) {
		super(json);
		this.contacts = json?.contacts?.map((c: any) => new ParamContactMerge(c)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepContactBatchMerge(json);
	}
}