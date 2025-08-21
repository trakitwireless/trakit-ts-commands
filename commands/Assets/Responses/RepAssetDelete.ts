import { Reply } from "../../API/Responses/Reply";

/**
 * For delete/restore commands, this contains the <see cref="Asset.id"/>, owning <see cref="Company.id"/>, and deleted state.
 **/
export class RepAssetDelete extends Reply {
	/**
		///
	 **/
	asset: ContentIdDeleted;}