import { ContentIdendifierCompany } from "./ContentIdendifierCompany";

/**
 * A container for the id, <see cref="Asset"/> id, and owning <see cref="Company.id"/> of the <see cref="Provider"/> requested/created.
 **/
export class ContentIdendifierAsset extends ContentIdendifierCompany {
	/**
	 * Identifier of the <see cref="Asset"/> to which this object belongs.
	 * <remarks>
	 * This value must remain nullable because Providers can have a null value for their asset member.
	 * </remarks>
	 **/
	asset: ulong | undefined;}