import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link company}.
 **/
export class RepCompanyDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Company}.
	 **/
	company: ContentIdDeleted | nothing;

	constructor(json: any) {
		super(json);
		this.company = ContentIdDeleted.fromJSON(json?.company);
	}
}