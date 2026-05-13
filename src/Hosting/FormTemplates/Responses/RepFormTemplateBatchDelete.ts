import { JsonObject, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link formTemplate}.
 */
export class RepFormTemplateBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link FormTemplate}.
	 */
	formTemplates: ContentIdDeleted[];

	constructor(json: JsonObject) {
		super(json, "FormTemplate");
		this.formTemplates = (json?.formTemplates as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
	protected override _getKeys() { return this.formTemplates?.map(f => f.id) as ulong[]; }
	override getCompanyId() { return this.formTemplates?.[0]?.company as ulong; }
	override getResults() { return this.formTemplates as ContentIdDeleted[]; }
}