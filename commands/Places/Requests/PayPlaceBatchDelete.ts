import { JsonObject } from "@trakit/objects";
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

	constructor(json?: JsonObject) {
		super(json);
		this.places = (json?.places as JsonObject[])?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepPlaceBatchDelete(json as JsonObject);
	}
}