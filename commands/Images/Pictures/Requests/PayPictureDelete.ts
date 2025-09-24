import { PayPicture } from "./PayPicture";

/**
 * Deletes an existing {@link Picture}.
 **/
export class PayPictureDelete extends PayPicture { 
	override createReply(json: any): Reply {
		return new RepPictureDelete(json);
	}
}