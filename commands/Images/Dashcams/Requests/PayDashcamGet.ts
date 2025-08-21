import { PayDashcam } from "./PayDashcam";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified @link {Dashcam}.
 **/
export class PayDashcamGet extends PayDashcam implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted @link {Dashcam} (if it exists).
	 **/
	includeDeleted: boolean;}