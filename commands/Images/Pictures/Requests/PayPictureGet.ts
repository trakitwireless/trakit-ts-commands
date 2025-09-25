import { Reply } from "../../../API/Responses/Reply";
import { PayPicture } from "./PayPicture";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepPictureGet } from "../Responses/RepPictureGet";

/**
 * Gets details of the specified {@link Picture}.
 **/
export class PayPictureGet extends PayPicture implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Picture} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepPictureGet(json);
	}
}