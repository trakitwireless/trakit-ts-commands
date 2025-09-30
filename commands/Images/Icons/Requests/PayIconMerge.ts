import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamIconMerge } from "./Parameters/ParamIconMerge";
import { RepIconMerge } from "../Responses/RepIconMerge";

/**
 * Creates a new or updates an existing {@link Icon}.
 **/
export class PayIconMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Icon}.
	 **/
	icon: ParamIconMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.icon = new ParamIconMerge(json?.icon as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.icon?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepIconMerge(json as JsonObject);
	}
}