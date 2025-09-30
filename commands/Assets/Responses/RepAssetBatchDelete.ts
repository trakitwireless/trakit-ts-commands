import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";

/**
 * 
 **/
export class RepAssetBatchDelete extends Reply {
	/**
	 * 
	 **/
	assets: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.assets = (json?.assets as JsonObject[])?.map((a: any) => new ContentIdDeleted(a));
	}
}