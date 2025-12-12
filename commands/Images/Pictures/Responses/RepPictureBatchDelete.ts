import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link picture}.
 **/
export class RepPictureBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Picture}.
	 **/
	pictures: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Picture");
		this.pictures = (json?.pictures as JsonObject[])?.map((p: any) => new ContentIdDeleted(p));
	}
	protected override _getKeys() { return this.pictures?.map(p => p.id) as ulong[]; }
	override getCompanyId() { return this.pictures?.[0]?.company as ulong; }
	override getResults() { return this.pictures as ContentIdDeleted[]; }
}