import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdendifierDeleted } from "../../../API/Responses/Content/ContentIdendifierDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Provider}.
	 **/
	providers: ContentIdendifierDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Provider");
		this.providers = (json?.providers as JsonObject[])?.map((v: any) => new ContentIdendifierDeleted(v));
	}
	protected override _getKeys() { return this.providers?.map((e) => e.id) as string[]; }
}