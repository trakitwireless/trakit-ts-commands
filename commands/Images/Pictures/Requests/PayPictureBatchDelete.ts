import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepPictureBatchDelete } from "../Responses/RepPictureBatchDelete";

/**
 * 
 **/
export class PayPictureBatchDelete extends Payload {
	/**
	 * 
	 **/
	pictures: ParamId[];

	constructor(json: any) {
		super(json);
		this.pictures = json?.pictures?.map((i: any) => new ParamId(i)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepPictureBatchDelete(json);
	}
}