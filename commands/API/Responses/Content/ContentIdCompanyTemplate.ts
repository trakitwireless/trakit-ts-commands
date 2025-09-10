import { nothing, ulong } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";

/**
 * A container for the id, owning {@link ReportTemplate} id, and owning {@link Company.id} of the report object requested/created.
 **/
export class ContentIdCompanyTemplate extends ContentIdCompany {
	/**
	 * Identifier of the template to which this object belongs.
	 **/
	template: ulong | nothing;
}