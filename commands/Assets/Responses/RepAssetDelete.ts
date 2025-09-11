import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * For delete/restore commands, this contains the {@link Asset.id}, owning {@link Company.id}, and deleted state.
 **/
export class RepAssetDelete extends Reply {
	/**
	 * 
	 **/
	asset: ContentIdDeleted | nothing;

	constructor(json?: any) {
		super(json);
		this.asset = ContentIdDeleted.fromJSON(json?.asset);
	}
}