import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamPictureMerge } from "./Parameters/ParamPictureMerge";
import { RepPictureMerge } from "../Responses/RepPictureMerge";

/**
 * Creates a new or updates an existing {@link Picture}.
 **/
export class PayPictureMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Picture}.
	 **/
	picture: ParamPictureMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.picture = new ParamPictureMerge(json?.picture as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.picture?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepPictureMerge(json as JsonObject);
	}
}