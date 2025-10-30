import { JsonObject, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link maintenanceJob}.
 **/
export class RepMaintenanceJobDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link MaintenanceJob}.
	 **/
	maintenanceJob: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "MaintenanceJob");
		this.maintenanceJob = ContentIdDeleted.fromJSON(json?.maintenanceJob as JsonObject);
	}
	protected override _getKey() { return this.maintenanceJob?.id as ulong; }
}