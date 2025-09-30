import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamPlaceMerge } from "./Parameters/ParamPlaceMerge";
import { RepPlaceMerge } from "../Responses/RepPlaceMerge";

/**
 * Creates a new or updates an existing {@link Place}.
 */
export class PayPlaceMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Place}.
	 */
	place: ParamPlaceMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.place = new ParamPlaceMerge(json?.place as JsonObject);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.place?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepPlaceMerge(json as JsonObject);
	}
}