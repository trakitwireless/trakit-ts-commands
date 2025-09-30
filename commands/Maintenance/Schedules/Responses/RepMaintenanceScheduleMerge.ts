import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link maintenanceSchedule}.
 **/
export class RepMaintenanceScheduleMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	maintenanceSchedule: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.maintenanceSchedule = ContentIdCompany.fromJSON(json?.maintenanceSchedule as JsonObject);
	}
}