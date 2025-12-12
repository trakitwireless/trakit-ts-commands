import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link maintenanceSchedule}.
 **/
export class RepMaintenanceScheduleBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedules: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "MaintenanceSchedule");
		this.maintenanceSchedules = (json?.maintenanceSchedules as JsonObject[])?.map((item: any) => new ContentIdDeleted(item)) ;
	}
	protected override _getKeys() { return this.maintenanceSchedules?.map(m => m.id) as ulong[]; }
	override getCompanyId() { return this.maintenanceSchedules?.[0]?.company as ulong; }
	override getResults() { return this.maintenanceSchedules as ContentIdDeleted[]; }
}