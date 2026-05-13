import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepReportResultListByCompany } from "../Responses/RepReportResultList";

/**
 * Gets details of the specified {@link reportResult}.
 */
export abstract class PayReportResultList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link ReportResult}s.
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class PayReportResultListByCompany extends PayReportResultList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepReportResultListByCompany(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			company: this.company.toJSON(),
		};
	}
}