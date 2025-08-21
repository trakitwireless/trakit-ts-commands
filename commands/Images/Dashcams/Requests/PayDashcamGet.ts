import { PayDashcam } from "./PayDashcam";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="Dashcam"/>.
 **/
export class PayDashcamGet extends PayDashcam implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="Dashcam"/> (if it exists).
	 **/
	includeDeleted: boolean;}