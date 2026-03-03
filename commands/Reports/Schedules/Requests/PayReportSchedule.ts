import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link reportSchedule} object.
 */
export abstract class PayReportSchedule extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ReportSchedule}.
	 */
	reportSchedule: ParamId;

	constructor(json?: JsonObject) {
		super();
		this.reportSchedule = new ParamId(json?.reportSchedule as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.reportSchedule?.id?.toString() ?? "";
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			reportSchedule: this.reportSchedule.toJSON(),
		};
	}
}