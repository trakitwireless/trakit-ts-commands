import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { RepPlaceBatchMerge } from "../Responses/RepPlaceBatchMerge";
import { ParamPlaceMerge } from "./Parameters/ParamPlaceMerge";

/**
 * 
 */
export class PayPlaceBatchMerge extends Payload {
	/**
	 * 
	 */
	places: ParamPlaceMerge[];

	constructor(json?: any) {
		super(json);
		this.places = json?.places?.map((item: any) => new ParamPlaceMerge(item)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepPlaceBatchMerge(json);
	}
}