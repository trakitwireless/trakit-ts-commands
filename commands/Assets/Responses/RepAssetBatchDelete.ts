import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepAssetBatchDelete extends Reply {
	/**
	 * 
	 **/
	assets: ContentIdDeleted[] | nothing;

	constructor(json?: any) {
		super(json);
		this.assets = json?.assets?.map((a: any) => new ContentIdDeleted(a));
	}
}