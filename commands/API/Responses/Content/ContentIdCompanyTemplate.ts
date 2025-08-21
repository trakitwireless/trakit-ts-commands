import { ContentIdCompany } from "./ContentIdCompany";

/**
 * A container for the id, owning <see cref="ReportTemplate"/> id, and owning <see cref="Company.id"/> of the report object requested/created.
 **/
export class ContentIdCompanyTemplate extends ContentIdCompany {
	/**
	 * Identifier of the template to which this object belongs.
	 **/
	template: ulong | undefined;}