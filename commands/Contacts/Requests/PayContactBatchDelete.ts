import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepContactBatchDelete } from "../Responses/RepContactBatchDelete";

/**
 * 
 **/
export class PayContactBatchDelete extends Payload {
	/**
	 * 
	 **/
	contacts: ParamId[];

	constructor(json: any) {
		super(json);
		this.contacts = json?.contacts?.map((c: any) => new ParamId(c)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepContactBatchDelete(json);
	}
}