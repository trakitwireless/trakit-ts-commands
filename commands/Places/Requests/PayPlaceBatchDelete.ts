import { Reply } from "../../API/Responses/Reply";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { RepPlaceBatchDelete } from "../Responses/RepPlaceBatchDelete";

/**
 * 
 */
export class PayPlaceBatchDelete extends Payload {
	/**
	 * 
	 */
	places: ParamId[];

	constructor(json?: any) {
		super(json);
		this.places = json?.places?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepPlaceBatchDelete(json);
	}
}