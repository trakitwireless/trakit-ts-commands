import { RepPictureDelete } from "../Responses/RepPictureDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayPicture } from "./PayPicture";

/**
 * Deletes an existing {@link Picture}.
 **/
export class PayPictureDelete extends PayPicture { 
	override createReply(json: any): Reply {
		return new RepPictureDelete(json);
	}
}