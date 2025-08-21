import { ErrorDetailUserGroupInUse } from "./ErrorDetailUserGroupInUse";

/**
 * Details for how many and which <see cref="Asset"/>s and <see cref="User"/>s are still using this <see cref="Contact"/>.
 **/
export class ErrorDetailContactInUse extends ErrorDetailUserGroupInUse {
	assets: ulong[];}