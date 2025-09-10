import { ulong } from "@trakit/objects";
import { ContentLogin } from "./ContentLogin";

/**
 * A container for the {@link User} login and owning {@link Company.id} of the user requested/created.
 **/
export class ContentLoginCompany extends ContentLogin {
	/**
	 * Identifier of the {@link Company} to which the {@link User} belongs.
	 **/
	company: ulong;

	constructor(json: any) {
		super(json);
		this.company = json?.company;
	}
}