import { JsonObject, Machine, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link machine}.
 */
export class RepMachineGet extends ReplySyncGet<Machine> {
	/**
	 * The requested {@link Machine}.
	 */
	machine: Machine | nothing;

	constructor(json: JsonObject) {
		super(json, "Machine");
		if (json?.machine) {
			this.machine = new Machine(json.machine as JsonObject);
		}
	}
	override getObject(): Machine { return this.machine as Machine; }
	override getCompanyId() { return this.machine?.companyId as ulong; }
}