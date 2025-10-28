import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ErrorDetailType } from "./ErrorDetailType";
import { ErrorDetailUserGroupInUse } from "./ErrorDetailUserGroupInUse";

/**
 * Details for how many and which {@link Asset}s and {@link User}s are still using this {@link Contact}.
 **/
export class ErrorDetailContactInUse extends ErrorDetailUserGroupInUse {
	override get kind() { return ErrorDetailType.contactInUse; }

	assets: ulong[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.assets = json?.assets as ulong[];
	}

	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			"assets": this.assets?.slice() ?? null,
		};
	}
}