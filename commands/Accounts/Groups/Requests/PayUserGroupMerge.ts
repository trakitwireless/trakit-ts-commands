import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserGroupMerge } from "../Responses/RepUserGroupMerge";
import { ParamUserGroupMerge } from "./Parameters/ParamUserGroupMerge";

/**
 * Creates a new or updates an existing {@link UserGroup}.
 **/
export class PayUserGroupMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link UserGroup}.
	 **/
	userGroup: ParamUserGroupMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.userGroup = new ParamUserGroupMerge(json?.userGroup as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.userGroup?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserGroupMerge(json as JsonObject);
	}
}