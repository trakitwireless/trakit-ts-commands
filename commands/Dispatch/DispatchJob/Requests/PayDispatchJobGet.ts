import { PayDispatchJob } from "./PayDispatchJob";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="DispatchJob"/>.
 **/
export class PayDispatchJobGet extends PayDispatchJob implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="DispatchJob"/> (if it exists).
	 **/
	includeDeleted: boolean;}