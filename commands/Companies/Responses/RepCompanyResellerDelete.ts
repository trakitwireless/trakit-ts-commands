import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParentDeleted } from "../../API/Responses/Content/ContentIdParentDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link companyReseller}.
 **/
export class RepCompanyResellerDelete extends ReplySyncDelete {
	// does not implement ReplySyncDelete because a reseller is simply a part of a company.

	/**
	 * Details about deleting/restoring the requested {@link Company}.
	 **/
	companyReseller: ContentIdParentDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyReseller");
		this.companyReseller = ContentIdParentDeleted.fromJSON(json?.companyReseller as JsonObject);
	}
	override getKey() { return this.companyReseller?.id as ulong; }
	override getCompanyId() { return this.companyReseller?.parent as ulong; }
}