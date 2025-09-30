import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdendifierDeleted } from "../../../API/Responses/Content/ContentIdendifierDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Provider}.
	 **/
	providers: ContentIdendifierDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providers = (json?.providers as JsonObject[])?.map((v: any) => new ContentIdendifierDeleted(v));
	}
}