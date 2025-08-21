import { PayMaintenanceSchedule } from "./PayMaintenanceSchedule";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="MaintenanceSchedule"/>.
 **/
export class PayMaintenanceScheduleGet extends PayMaintenanceSchedule implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="MaintenanceSchedule"/> (if it exists).
	 **/
	includeDeleted: boolean;}