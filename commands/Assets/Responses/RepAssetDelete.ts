import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";

/**
 * For delete/restore commands, this contains the {@link Asset.id}, owning {@link Company.id}, and deleted state.
 **/
export class RepAssetDelete extends Reply {
	/**
	 * 
	 **/
	asset: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = ContentIdDeleted.fromJSON(json?.asset as JsonObject);
	}
}