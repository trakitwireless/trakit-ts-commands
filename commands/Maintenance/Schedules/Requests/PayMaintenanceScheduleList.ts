import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayMaintenanceScheduleList } from "./PayMaintenanceScheduleList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="maintenanceSchedule"/>.
 **/
export abstract class PayMaintenanceScheduleList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="MaintenanceSchedule"/>s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayMaintenanceScheduleListByCompany extends PayMaintenanceScheduleList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;}