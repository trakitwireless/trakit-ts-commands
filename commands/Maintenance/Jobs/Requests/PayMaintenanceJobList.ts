import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { RepMaintenanceJobListByCompany } from "../Responses/RepMaintenanceJobList";

/**
 * Gets details of the specified {@link maintenanceJob}.
 **/
export abstract class PayMaintenanceJobList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link MaintenanceJob}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
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

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepMaintenanceJobListByCompany(json);
	}
}