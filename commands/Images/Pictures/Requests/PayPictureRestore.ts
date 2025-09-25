import { Reply } from "../../../API/Responses/Reply";
import { RepPictureDelete } from "../Responses/RepPictureDelete";
import { PayPicture } from "./PayPicture";

/**
 * Restores a deleted {@link Picture}.
 **/
export class PayPictureRestore extends PayPicture { 
	override createReply(json: any): Reply {
		return new RepPictureDelete(json);
	}
}