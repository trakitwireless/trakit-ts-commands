import { JsonObject } from "@trakit/objects";
import { RepPictureDelete } from "../Responses/RepPictureDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayPicture } from "./PayPicture";

/**
 * Deletes an existing {@link Picture}.
 **/
export class PayPictureDelete extends PayPicture { 
	override createReply(json: JsonObject): Reply {
		return new RepPictureDelete(json);
	}
}