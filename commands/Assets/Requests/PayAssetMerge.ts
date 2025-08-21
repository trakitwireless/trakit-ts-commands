import { Payload } from "../../API/Requests/Payload";

/**
 * Container for the command to creates a new, or updates an existing {@link Asset}.
 **/
export class PayAssetMerge extends Payload {
	/**
	 * Parameters given to create or update an {@link Asset}.
	 **/
	asset: ParamAssetMerge;}