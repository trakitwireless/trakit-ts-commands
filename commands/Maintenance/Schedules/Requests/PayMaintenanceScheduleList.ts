import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { Payload } from "../../../API/Requests/Payload";

/**
 * Gets details of the specified {@link maintenanceSchedule}.
 **/
export abstract class PayMaintenanceScheduleList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link MaintenanceSchedule}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted;
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayMaintenanceScheduleListByCompany extends PayMaintenanceScheduleList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json: any): Reply {
		return new RepMaintenanceScheduleListByCompany extends PayMaintenanceScheduleList implements IPayList(json);
	}
}