import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParentDeleted } from "../../API/Responses/Content/ContentIdParentDeleted";
import { ReplySyncBatchDelete } from "../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link company}.
 */
export class RepCompanyBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Company}.
	 */
	companies: ContentIdParentDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Company");
		this.companies = (json?.companies as JsonObject[])?.map((c: any) => new ContentIdParentDeleted(c));
	}
	protected override _getKeys() { return this.companies?.map(c => c.id) as ulong[]; }
	override getCompanyId() { return this.companies?.[0]?.parent as ulong; }
	override getResults() { return this.companies as ContentIdParentDeleted[]; }
}