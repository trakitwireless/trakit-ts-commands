import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";

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
}