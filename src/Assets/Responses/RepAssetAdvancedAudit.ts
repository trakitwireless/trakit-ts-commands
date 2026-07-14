import { AssetAdvanced, JsonObject } from "@trakit/objects";
import { ContentAudit } from "../../API/Responses/Content/ContentAudit";
import { ReplyAudit } from "../../API/Responses/ReplyAudit";

/**
 * A container for {@link AssetAdvanced} audit history.
 */
export class RepAssetAdvancedAudit extends ReplyAudit<AssetAdvanced> {
	/**
	 * The collection of audit details for the requested {@link AssetAdvanced}.
	 */
	assetAdvanceds: ContentAudit<AssetAdvanced>[];

	constructor(json: JsonObject) {
		super(json);
		this.assetAdvanceds = (json?.assetAdvanceds as JsonObject[])?.map(obj => new ContentAudit(new AssetAdvanced(obj), obj)) ?? [];
	}
	getHistory(): ContentAudit<AssetAdvanced>[] { return this.assetAdvanceds; }
}