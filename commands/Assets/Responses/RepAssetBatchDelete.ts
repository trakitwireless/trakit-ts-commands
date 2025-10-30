import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";

/**
 * 
 **/
export class RepAssetBatchDelete extends ReplySyncBatchDelete {
	/**
	 * 
	 **/
	assets: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.assets = (json?.assets as JsonObject[])?.map((a: any) => new ContentIdDeleted(a));
	}
}