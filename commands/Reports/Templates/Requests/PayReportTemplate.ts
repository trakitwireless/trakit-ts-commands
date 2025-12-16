import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link reportTemplate} object.
 */
export abstract class PayReportTemplate extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ReportTemplate}.
	 */
	reportTemplate: ParamId;

	constructor(json?: JsonObject) {
		super();
		this.reportTemplate = new ParamId(json?.reportTemplate as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.reportTemplate?.id?.toString() ?? "";
	}
}