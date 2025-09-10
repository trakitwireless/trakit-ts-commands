import { nothing, ulong } from "@trakit/objects";
import { ContentIdendifier } from "./ContentIdendifier";

/**
 * A container for the id and owning {@link Company} of the {@link Provider} requested/created.
 **/
export class ContentIdendifierCompany extends ContentIdendifier {
	/**
	 * Identifier of the {@link Company} to which this object belongs.
	 **/
	company: ulong | nothing;
	
	constructor(json: any) {
		super(json);
		this.company = json?.company;
	}
}