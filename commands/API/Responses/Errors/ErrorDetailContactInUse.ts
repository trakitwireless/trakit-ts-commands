import { ErrorDetailUserGroupInUse } from "./ErrorDetailUserGroupInUse";

/**
 * Details for how many and which @link {Asset}s and @link {User}s are still using this @link {Contact}.
 **/
export class ErrorDetailContactInUse extends ErrorDetailUserGroupInUse {
	assets: ulong[];}