import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepDashcamGet } from "../Responses/RepDashcamGet";
import { PayDashcam } from "./PayDashcam";

/**
 * Gets details of the specified {@link Dashcam}.
 */
export class PayDashcamGet extends PayDashcam implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Dashcam} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepDashcamGet(json);
	}
}