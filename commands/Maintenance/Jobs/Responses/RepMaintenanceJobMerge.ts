import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link maintenanceJob}.
 **/
export class RepMaintenanceJobMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	maintenanceJob: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.maintenanceJob = ContentIdCompany.fromJSON(json?.maintenanceJob);
	}
}