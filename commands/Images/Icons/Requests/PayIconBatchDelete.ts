import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * 
 **/
export class PayIconBatchDelete extends Payload {
	/**
	 * 
	 **/
	icons: ParamId[];

	constructor(json: any) {
		super(json);
		this.icons = json?.icons?.map((i: any) => new ParamId(i)) ?? [];
	}
}