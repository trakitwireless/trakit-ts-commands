import { ContentIdSuspended } from "../../API/Responses/Content/ContentIdSuspended";
import { Reply } from "../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

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
		this.assets = json?.assets?.map((a: any) => new ContentIdSuspended(a));
	}
}