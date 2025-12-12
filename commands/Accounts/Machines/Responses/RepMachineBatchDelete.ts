import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentKeyDeleted } from "../../../API/Responses/Content/ContentKeyDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Machine}.
	 **/
	machines: ContentKeyDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Machine");
		this.machines = (json?.machines as JsonObject[])?.map((m: any) => new ContentKeyDeleted(m));
	}
	protected override _getKeys() { return this.machines?.map(m => m.key) as string[]; }
	override getCompanyId() { return this.machines?.[0]?.company as ulong; }
	override getResults() { return this.machines as ContentKeyDeleted[]; }
}