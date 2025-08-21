import { PayMaintenanceSchedule } from "./PayMaintenanceSchedule";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link MaintenanceSchedule}.
 **/
export class PayMaintenanceScheduleGet extends PayMaintenanceSchedule implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link MaintenanceSchedule} (if it exists).
	 **/
	includeDeleted: boolean;}