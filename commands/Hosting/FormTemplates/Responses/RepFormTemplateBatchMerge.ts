import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 */
export class RepFormTemplateBatchMerge extends Reply {
	/**
	 * 
	 */
	formTemplates: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.formTemplates = (json?.formTemplates as JsonObject[])?.map((item: any) => new ContentIdCompany(item));
	}
}