import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetGeneralGet } from "../Responses/RepAssetGeneralGet";
import { PayAsset } from "./PayAsset";

/**
 * Gets details of the specified {@link AssetGeneral}.
 */
export class PayAssetGeneralGet extends PayAsset implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link AssetGeneral} (if it exists).
	 */
	includeDeleted: boolean;
	/**
	 * When true, the command will also return {@link AssetGeneralMessage}s for the asset.
	 */
	includeMessages: boolean;
	/**
	 * When true, the command will also return {@link DispatchTask}s for the asset.
	 */
	includeTasks: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
		this.includeMessages = !!json?.includeMessages;
		this.includeTasks = !!json?.includeTasks;
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetGeneralGet(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
			includeMessages: !!this.includeMessages,
			includeTasks: !!this.includeTasks
		};
	}
}