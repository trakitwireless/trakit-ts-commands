import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdSuspended } from "../../API/Responses/Content/ContentIdSuspended";
import { Reply } from "../../API/Responses/Reply";

/**
 * 
 **/
export class RepAssetSuspend extends Reply {
	/**
	 * 
	 **/
	asset: ContentIdSuspended | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = ContentIdSuspended.fromJSON(json?.asset as JsonObject);
	}
}