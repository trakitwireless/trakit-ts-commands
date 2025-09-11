import { nothing, ulong } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";

/**
 * A container for the id, {@link BillingProfile.id}, and owning {@link Company.id} of the billing object requested/created.
 **/
export class ContentIdBillingProfile extends ContentIdCompany {
	/**
	 * Creates a {@link ContentIdBillingProfile} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdBillingProfile} from.
	 * @returns A {@link ContentIdBillingProfile} instance or nothing.
	 */
	static override fromJSON(json: any): ContentIdBillingProfile | nothing {
		return json
			? new ContentIdBillingProfile(json)
			: null;
	}

	/**
	 * Identifier of the {@link BillingProfile} to which this object belongs
	 **/
	profile: ulong | nothing;

	constructor(json: any) {
		super(json);
		this.profile = json?.profile;
	}
}