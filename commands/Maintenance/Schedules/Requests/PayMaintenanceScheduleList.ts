import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayMaintenanceScheduleList } from "./PayMaintenanceScheduleList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified {@link maintenanceSchedule}.
 **/
export abstract class PayMaintenanceScheduleList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link MaintenanceSchedule}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayMaintenanceScheduleListByCompany extends PayMaintenanceScheduleList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;}