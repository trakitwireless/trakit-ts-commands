import { FormTemplate, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link formTemplates}.
 */
export abstract class RepFormTemplateList extends ReplySyncList<FormTemplate> {
	/**
	 * The list of requested {@link FormTemplate}s.
	 */
	formTemplates: FormTemplate[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "FormTemplate");
		this.formTemplates = (json?.formTemplates as JsonObject[])?.map((item: any) => new FormTemplate(item));
	}
	override getCollection() { return this.formTemplates as FormTemplate[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepFormTemplateListByCompany extends RepFormTemplateList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}