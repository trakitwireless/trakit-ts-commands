import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayReportTemplate } from "./PayReportTemplate";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepReportTemplateGet } from "../Responses/RepReportTemplateGet";

/**
 * Gets details of the specified {@link ReportTemplate}.
 */
export class PayReportTemplateGet extends PayReportTemplate implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ReportTemplate} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepReportTemplateGet(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}