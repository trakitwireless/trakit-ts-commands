import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link companyReseller}.
 **/
export class RepCompanyResellerDelete extends Reply {
	// does not implement ReplySyncDelete because a reseller is simply a part of a company.

	/**
	 * Details about deleting/restoring the requested {@link Company}.
	 **/
	companyReseller: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.companyReseller = ContentIdDeleted.fromJSON(json?.companyReseller as JsonObject);
	}
}