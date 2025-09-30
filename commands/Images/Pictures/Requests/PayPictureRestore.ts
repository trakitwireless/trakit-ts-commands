import { Reply } from "../../../API/Responses/Reply";
import { RepPictureDelete } from "../Responses/RepPictureDelete";
import { PayPicture } from "./PayPicture";

/**
 * Restores a deleted {@link Picture}.
 **/
export class PayPictureRestore extends PayPicture { 
	override createReply(json: JsonObject): Reply {
		return new RepPictureDelete(json as JsonObject);
	}
}