import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link company}.
 **/
export class RepCompanyBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Company}.
	 **/
	companies: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.companies = json?.companies?.map((c: any) => new ContentIdDeleted(c));
	}
}