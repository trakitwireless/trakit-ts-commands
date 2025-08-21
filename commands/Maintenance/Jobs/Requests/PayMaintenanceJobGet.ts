import { PayMaintenanceJob } from "./PayMaintenanceJob";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="MaintenanceJob"/>.
 **/
export class PayMaintenanceJobGet extends PayMaintenanceJob implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="MaintenanceJob"/> (if it exists).
	 **/
	includeDeleted: boolean;}