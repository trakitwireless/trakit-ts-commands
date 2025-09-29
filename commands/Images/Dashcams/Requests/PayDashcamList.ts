import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { RepDashcamListByCompany } from "../Responses/RepDashcamList";

/**
 * Gets details of the specified {@link dashcam}.
 **/
export abstract class PayDashcamList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link Dashcam}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayDashcamListByCompany extends PayDashcamList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json?: JsonObject): Reply {
		return new RepDashcamListByCompany(json);
	}
}