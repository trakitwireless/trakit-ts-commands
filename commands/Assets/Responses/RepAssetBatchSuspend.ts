import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdSuspended } from "../../API/Responses/Content/ContentIdSuspended";
import { Reply } from "../../API/Responses/Reply";

/**
 * 
 **/
export class RepAssetBatchSuspend extends Reply {
	/**
	 * 
	 **/
	assets: ContentIdSuspended[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.assets = (json?.assets as JsonObject[])?.map((a: any) => new ContentIdSuspended(a));
	}
}