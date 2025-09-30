import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
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

	constructor(json?: JsonObject) {
		super(json);
		this.pictures = (json?.pictures as JsonObject[])?.map((i: any) => new ParamId(i)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepPictureBatchDelete(json as JsonObject);
	}
}