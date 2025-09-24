import { Payload } from "../../../API/Requests/Payload";
import { ParamPictureMerge } from "./Parameters/ParamPictureMerge";

/**
 * 
 **/
export class PayPictureBatchMerge extends Payload {
	/**
	 * 
	 **/
	pictures: ParamPictureMerge[];

	constructor(json: any) {
		super(json);
		this.pictures = json?.pictures?.map((i: any) => new ParamPictureMerge(i)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepPictureBatchMerge(json);
	}
}