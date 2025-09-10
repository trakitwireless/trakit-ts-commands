import { nothing, ulong } from "@trakit/objects";
import { ContentCode } from "./ContentCode";

/**
 * A container for the id and owning {@link Company} of the {@link ProviderRegistration} requested/created.
 **/
export class ContentCodeCompany extends ContentCode {
	/**
	 * Identifier of the {@link Company} to which this object belongs.
	 **/
	company: ulong | nothing;

	constructor(json: any) {
		super(json);
		this.company = json?.company;
	}
}