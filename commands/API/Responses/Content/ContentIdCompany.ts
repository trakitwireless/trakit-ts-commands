import { ContentId } from "./ContentId";

/**
 * A container for the id and owning @link {Company.id} of the object requested/created.
 **/
export class ContentIdCompany extends ContentId implements IBelongCompany {
	/**
	 * Identifier of the @link {Company} to which this object belongs.
	 **/
	company: ulong;}