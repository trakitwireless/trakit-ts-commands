import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link company}.
 **/
export class RepCompanyDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link Company}.
	 **/
	company: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentIdDeleted.fromJSON(json?.company as JsonObject);
	}
}