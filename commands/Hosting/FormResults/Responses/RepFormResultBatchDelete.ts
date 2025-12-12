import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link formResult}.
 */
export class RepFormResultBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link FormResult}.
	 **/
	formResults: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "FormResult");
		this.formResults = (json?.formResults as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
	protected override _getKeys() { return this.formResults?.map(f => f.id) as ulong[]; }
	override getCompanyId() { return this.formResults?.[0]?.company as ulong; }
	override getResults() { return this.formResults as ContentIdDeleted[]; }
}