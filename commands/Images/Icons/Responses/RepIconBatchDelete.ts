import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link icon}.
 **/
export class RepIconBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Icon}.
	 **/
	icons: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Icon");
		this.icons = (json?.icons as JsonObject[])?.map((i: any) => new ContentIdDeleted(i));
	}
	protected override _getKeys() { return this.icons?.map(i => i.id) as ulong[]; }
	override getCompanyId() { return this.icons?.[0]?.company as ulong; }
	override getResults() { return this.icons as ContentIdDeleted[]; }
}