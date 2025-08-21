import { ContentId } from "./ContentId";

/**
 * A container for the id and owning <see cref="Company.id"/> of the object requested/created.
 **/
export class ContentIdCompany extends ContentId implements IBelongCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this object belongs.
	 **/
	company: ulong;}