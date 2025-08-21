import { PayPicture } from "./PayPicture";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified @link {Picture}.
 **/
export class PayPictureGet extends PayPicture implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted @link {Picture} (if it exists).
	 **/
	includeDeleted: boolean;}