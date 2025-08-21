import { PayPicture } from "./PayPicture";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="Picture"/>.
 **/
export class PayPictureGet extends PayPicture implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="Picture"/> (if it exists).
	 **/
	includeDeleted: boolean;}