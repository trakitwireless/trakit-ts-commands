import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";

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
}