import { ContentIdCompany } from "./ContentIdCompany";

/**
 * A container for the id, <see cref="BillingProfile.id"/>, and owning <see cref="Company.id"/> of the billing object requested/created.
 **/
export class ContentIdBillingProfile extends ContentIdCompany {
	/**
	 * Identifier of the <see cref="BillingProfile"/> to which this object belongs
	 **/
	profile: ulong;}