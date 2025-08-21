import { ContentIdCompany } from "./ContentIdCompany";

/**
 * A container for the id, owning {@link Asset.id}, and owning {@link Company.id} of the object requested/created.
 **/
export class ContentIdAsset extends ContentIdCompany {
	/**
	 * Identifier of the {@link Asset} to which this object belongs
	 **/
	asset: ulong;}