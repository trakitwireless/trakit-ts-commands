import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 */
export class RepFormResultBatchMerge extends Reply {
	/**
	 * 
	 */
	formResults: ContentIdCompany[] | nothing;

	constructor(json: any) {
		super(json);
		this.formResults = json?.formResults?.map((item: any) => new ContentIdCompany(item)) ?? nothing;
	}
}