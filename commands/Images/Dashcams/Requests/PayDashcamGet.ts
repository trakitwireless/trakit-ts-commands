import { Reply } from "../../../API/Responses/Reply";
import { PayDashcam } from "./PayDashcam";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepDashcamGet } from "../Responses/RepDashcamGet";

/**
 * Gets details of the specified {@link Dashcam}.
 **/
export class PayDashcamGet extends PayDashcam implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Dashcam} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepDashcamGet(json);
	}
}