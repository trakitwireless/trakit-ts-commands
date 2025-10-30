import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link company}.
 **/
export class RepCompanyBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Company}.
	 **/
	companies: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.companies = (json?.companies as JsonObject[])?.map((c: any) => new ContentIdDeleted(c));
	}
}