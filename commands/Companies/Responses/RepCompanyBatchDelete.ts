import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link company}.
 **/
export class RepCompanyBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Company}.
	 **/
	companies: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Company");
		this.companies = (json?.companies as JsonObject[])?.map((c: any) => new ContentIdDeleted(c));
	}
	protected override _getKeys() { return this.companies?.map((e) => e.id) as ulong[]; }
}