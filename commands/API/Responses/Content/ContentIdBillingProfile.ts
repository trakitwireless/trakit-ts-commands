import { nothing, ulong } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";

/**
 * A container for the id, {@link BillingProfile.id}, and owning {@link Company.id} of the billing object requested/created.
 **/
export class ContentIdBillingProfile extends ContentIdCompany {
	/**
	 * Identifier of the {@link BillingProfile} to which this object belongs
	 **/
	profile: ulong | nothing;

	constructor(json: any) {
		super(json);
		this.profile = json?.profile;
	}
}