import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamUserMerge } from "./Parameters/ParamUserMerge";
import { RepUserMerge } from "../Responses/RepUserMerge";

/**
 * Creates a new or updates an existing {@link User}.
 **/
export class PayUserMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link User}.
	 **/
	user: ParamUserMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.user = new ParamUserMerge(json?.user as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.user?.login ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserMerge(json as JsonObject);
	}
}