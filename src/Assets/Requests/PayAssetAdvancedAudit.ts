import { AssetAdvanced, JsonObject, SyncName } from "@trakit/objects";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { PayloadAudit } from "../../API/Requests/PayloadAudit";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetAdvancedAudit } from "../Responses/RepAssetAdvancedAudit";

/**
 * Gets import { codified } from "@trakit/objects";
details of the specified {@link AssetAdvanced}.
 */
export class PayAssetAdvancedAudit extends PayloadAudit {
	/**
	 * 
	 */
	assetAdvanced: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.assetAdvanced = new ParamId(json?.assetAdvanced as JsonObject);
	}

	/**
	 * Overridden to add the object type.
	 * @returns 
	 */
	override getAction() {
		return {
			...super.getAction(),
			object: "AssetAdvanced" as SyncName,
		};
	}
	override getKey(): string { return this.assetAdvanced.id?.toString(); }

	override createReply(json: JsonObject): Reply {
		return new RepAssetAdvancedAudit(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			assetAdvanced: this.assetAdvanced.toJSON(),
		};
	}
}