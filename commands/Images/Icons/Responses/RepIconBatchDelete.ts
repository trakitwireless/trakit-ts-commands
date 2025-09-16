import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link icon}.
 **/
export class RepIconBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Icon}.
	 **/
	icons: ContentIdDeleted[] | nothing;

	constructor(json: any) {
		super(json);
		this.icons = json?.icons?.map((i: any) => new ContentIdDeleted(i));
	}
}