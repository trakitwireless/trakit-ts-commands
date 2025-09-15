import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
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

	constructor(json: any) {
		super(json);
		this.formTemplates = json?.formTemplates?.map((item: any) => new ContentIdCompany(item));
	}
}