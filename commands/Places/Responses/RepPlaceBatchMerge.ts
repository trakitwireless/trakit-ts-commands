import { nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";

/**
 * 
 */
export class RepPlaceBatchMerge extends Reply {
	/**
	 * 
	 */
	places: ContentIdCompany[] | nothing;
	
	constructor(json?: any) {
		super(json);
		this.places = json?.places?.map((item: any) => new ContentIdCompany(item)) ?? nothing;
	}
}