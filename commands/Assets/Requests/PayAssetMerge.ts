import { Payload } from "../../API/Requests/Payload";

/**
 * Container for the command to creates a new, or updates an existing <see cref="Asset"/>.
 **/
export class PayAssetMerge extends Payload {
	/**
	 * Parameters given to create or update an <see cref="Asset"/>.
	 **/
	asset: ParamAssetMerge;}