import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

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
}