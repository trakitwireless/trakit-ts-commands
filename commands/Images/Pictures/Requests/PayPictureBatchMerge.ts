import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepPictureBatchMerge } from "../Responses/RepPictureBatchMerge";
import { ParamPictureMerge } from "./Parameters/ParamPictureMerge";

/**
 * 
 **/
export class PayPictureBatchMerge extends Payload {
	/**
	 * 
	 **/
	pictures: ParamPictureMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.pictures = json?.pictures?.map((i: any) => new ParamPictureMerge(i)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepPictureBatchMerge(json);
	}
}