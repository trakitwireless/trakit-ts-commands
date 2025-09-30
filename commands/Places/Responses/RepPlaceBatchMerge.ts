import { nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";

/**
 * 
 */
export class RepPlaceBatchMerge extends Reply {
	/**
	 * 
	 */
	places: ContentIdCompany[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.places = (json?.places as JsonObject[])?.map((item: any) => new ContentIdCompany(item));
	}
}