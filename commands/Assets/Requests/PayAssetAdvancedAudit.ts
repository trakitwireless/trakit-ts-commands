import { AssetAdvanced, JsonObject, SyncName } from "@trakit/objects";
import { IPayListByAsset } from "../../API/Requests/IPayListByAsset";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { PayAudit } from "../../API/Requests/PayAudit";
import { ActionType } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetAdvancedAudit } from "../Responses/RepAssetAdvancedAudit";

/**
 * Gets import { codified } from "@trakit/objects";
details of the specified {@link AssetAdvanced}.
 */
export class PayAssetAdvancedAudit extends PayAudit implements IPayListByAsset {
	/**
	 * 
	 */
	asset: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamId(json?.asset as JsonObject);
	}

	/**
	 * Overridden because we use this command with the audit service, not the RESTful service.
	 * @returns 
	 */
	override getAction() {
		return {
			//...super.getAction();
			kind: "Get" as ActionType,
			object: "AssetAdvanced" as SyncName,
			filter: "",
			batch: false,
		};
	}

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