import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link companyReseller}.
 **/
export class RepCompanyResellerDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link Company}.
	 **/
	companyReseller: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.companyReseller = ContentIdDeleted.fromJSON(json?.companyReseller as JsonObject);
	}
}