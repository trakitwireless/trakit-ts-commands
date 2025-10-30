import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";

/**
 * For delete/restore commands, this contains the {@link Asset.id}, owning {@link Company.id}, and deleted state.
 **/
export class RepAssetDelete extends ReplySyncDelete {
	/**
	 * 
	 **/
	asset: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "Asset");
		this.asset = ContentIdDeleted.fromJSON(json?.asset as JsonObject);
	}

	protected override _getKey() { return this.asset?.id as ulong; }
}