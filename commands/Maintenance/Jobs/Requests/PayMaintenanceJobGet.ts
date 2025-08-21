import { PayMaintenanceJob } from "./PayMaintenanceJob";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified @link {MaintenanceJob}.
 **/
export class PayMaintenanceJobGet extends PayMaintenanceJob implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted @link {MaintenanceJob} (if it exists).
	 **/
	includeDeleted: boolean;}