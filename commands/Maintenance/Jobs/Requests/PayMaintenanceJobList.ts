import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayMaintenanceJobList } from "./PayMaintenanceJobList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified @link {maintenanceJob}.
 **/
export abstract class PayMaintenanceJobList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted @link {MaintenanceJob}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the @link {Company.id} of the collection.
 **/
export class PayMaintenanceJobListByCompany extends PayMaintenanceJobList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ParamId;}