import { Payload } from "../../API/Requests/Payload";
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
}