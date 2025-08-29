import { ulong } from "@trakit/objects";
import { ErrorDetailType } from "./ErrorDetailType";
import { ErrorDetailUserGroupInUse } from "./ErrorDetailUserGroupInUse";

/**
 * Details for how many and which {@link Asset}s and {@link User}s are still using this {@link Contact}.
 **/
export class ErrorDetailContactInUse extends ErrorDetailUserGroupInUse {
	override get kind() { return ErrorDetailType.contactInUse; }

	assets!: ulong[];
}