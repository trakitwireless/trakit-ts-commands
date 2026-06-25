import { guid, uint,int,JsonObject, nothing, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepSelfRecoverComplete } from "../Responses/RepSelfRecoverComplete";

/**
 * Completes the password recovery process.
 * If successful, will create a new password for your user and mark it as expired so you must change your password after using it to login the first time.
 */
export class PaySelfRecoverComplete extends Payload {
	/**
	 * The {@link User}'s login.
	 */
	guid: guid;
	/**
	 * The {@link User}'s password.
	 */
	length: uint | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.guid = json?.guid as string ?? "";
		this.length = json?.length as number;
	}

	override getAction(): {
		kind: "Merge",
		object: SyncName,
		filter: "RecoverComplete",
		batch: false,
	} {
		return {
			kind: "Merge",
			object: "Self" as SyncName,
			filter: "RecoverComplete",
			batch: false,
		};
	}

	override createReply(json: JsonObject): Reply {
		return new RepSelfRecoverComplete(json);
	}

	override toJSON(): JsonObject {
		const json: JsonObject = {
			...super.toJSON(),
			guid: this.guid,
		};
		if (this.length as uint > 0) json.length = this.length as uint;
		return json;
	}
}