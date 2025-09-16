import { Payload } from "../../../API/Requests/Payload";
import { ParamIconMerge } from "./Parameters/ParamIconMerge";

/**
 * 
 **/
export class PayIconBatchMerge extends Payload {
	/**
	 * 
	 **/
	icons: ParamIconMerge[];

	constructor(json: any) {
		super(json);
		this.icons = json?.icons?.map((i: any) => new ParamIconMerge(i)) ?? [];
	}
}