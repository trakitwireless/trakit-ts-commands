import { FormTemplate, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link formTemplates}.
 */
export abstract class RepFormTemplateList extends Reply {
	/**
	 * The list of requested {@link FormTemplate}s.
	 */
	formTemplates: FormTemplate[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.formTemplates = json?.formTemplates?.map((item: any) => new FormTemplate(item));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepFormTemplateListByCompany extends RepFormTemplateList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}