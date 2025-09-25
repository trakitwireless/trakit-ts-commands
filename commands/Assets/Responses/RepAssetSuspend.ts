import { ContentIdSuspended } from "../../API/Responses/Content/ContentIdSuspended";
import { Reply } from "../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepAssetSuspend extends Reply {
	/**
	 * 
	 **/
	asset: ContentIdSuspended | nothing;

	constructor(json?: any) {
		super(json);
		this.asset = ContentIdSuspended.fromJSON(json?.asset);
	}
}