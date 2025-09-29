import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { RepReportTemplateListByCompany } from "../Responses/RepReportTemplateList";

/**
 * Gets details of the specified {@link reportTemplate}.
 **/
export abstract class PayReportTemplateList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link ReportTemplate}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super();
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayReportTemplateListByCompany extends PayReportTemplateList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json?: JsonObject): Reply {
		return new RepReportTemplateListByCompany(json);
	}
}