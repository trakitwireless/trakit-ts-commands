import { PayDispatchJob } from "./PayDispatchJob";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified @link {DispatchJob}.
 **/
export class PayDispatchJobGet extends PayDispatchJob implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted @link {DispatchJob} (if it exists).
	 **/
	includeDeleted: boolean;}