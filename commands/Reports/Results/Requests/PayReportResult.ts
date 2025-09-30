import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link reportResult} object.
 **/
export abstract class PayReportResult extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ReportResult}.
	 **/
	reportResult: ParamId;

	constructor(json?: JsonObject) {
		super();
		this.reportResult = new ParamId(json?.reportResult as JsonObject);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.reportResult?.id?.toString() ?? "";
	}
}