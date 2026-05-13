import { AssetAdvanced, JsonObject, SyncName } from "@trakit/objects";
import { IPayListByAsset } from "../../API/Requests/IPayListByAsset";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { PayloadAudit } from "../../API/Requests/PayloadAudit";
import { ActionType } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetAdvancedAudit } from "../Responses/RepAssetAdvancedAudit";

/**
 * Gets import { codified } from "@trakit/objects";
details of the specified {@link AssetAdvanced}.
 */
export class PayAssetAdvancedAudit extends PayloadAudit implements IPayListByAsset {
	/**
	 * 
	 */
	asset: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamId(json?.asset as JsonObject);
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
	override getKey(): string { return this.asset.id?.toString(); }

	override createReply(json: JsonObject): Reply {
		return new RepAssetAdvancedAudit(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			asset: this.asset.toJSON(),
		};
	}
}