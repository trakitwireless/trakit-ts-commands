import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdendifierDeleted } from "commands/API/Responses/Content/ContentIdendifierDeleted";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Provider}.
	 **/
	providers: ContentIdendifierDeleted[] | nothing;

	constructor(json: any) {
		super(json);
		this.providers = json?.providers?.map((v: any) => new ContentIdendifierDeleted(v));
	}
}