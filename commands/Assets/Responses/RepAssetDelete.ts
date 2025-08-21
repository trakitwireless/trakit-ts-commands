import { Reply } from "../../API/Responses/Reply";

/**
 * For delete/restore commands, this contains the @link {Asset.id}, owning @link {Company.id}, and deleted state.
 **/
export class RepAssetDelete extends Reply {
	/**
	 * 
	 **/
	asset: ContentIdDeleted;}