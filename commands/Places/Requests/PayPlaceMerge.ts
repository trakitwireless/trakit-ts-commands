import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamPlaceMerge } from "./Parameters/ParamPlaceMerge";

/**
 * Creates a new or updates an existing {@link Place}.
 */
export class PayPlaceMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Place}.
	 */
	place: ParamPlaceMerge;

	constructor(json?: any) {
		super(json);
		this.place = new ParamPlaceMerge(json?.place);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.place?.id?.toString() ?? "";
	}

	override createReply(json: any): Reply {
		return new RepPlaceMerge(json);
	}
}