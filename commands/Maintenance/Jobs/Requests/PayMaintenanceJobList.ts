import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";

/**
 * Gets details of the specified {@link maintenanceJob}.
 **/
export abstract class PayMaintenanceJobList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link MaintenanceJob}s.
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
export class PayMaintenanceJobListByCompany extends PayMaintenanceJobList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json: any): Reply {
		return new RepMaintenanceJobListByCompany extends PayMaintenanceJobList implements IPayList(json);
	}
}