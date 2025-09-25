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

	constructor(json: any) {
		super(json);
		this.pictures = json?.pictures?.map((p: any) => new ContentIdCompany(p));
	}
}