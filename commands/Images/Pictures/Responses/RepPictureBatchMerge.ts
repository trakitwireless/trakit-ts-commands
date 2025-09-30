import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepPictureBatchMerge extends Reply {
	/**
	 * 
	 **/
	pictures: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.pictures = (json?.pictures as JsonObject[])?.map((p: any) => new ContentIdCompany(p));
	}
}