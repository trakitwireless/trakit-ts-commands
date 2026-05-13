import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParentDeleted } from "../../API/Responses/Content/ContentIdParentDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link company}.
 */
export class RepCompanyDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link Company}.
	 */
	company: ContentIdParentDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "Company");
		this.company = ContentIdParentDeleted.fromJSON(json?.company as JsonObject);
	}
	override getKey() { return this.company?.id as ulong; }
	override getCompanyId() { return this.company?.parent as ulong; }
}