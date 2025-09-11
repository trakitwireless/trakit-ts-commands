import { nothing } from "@trakit/objects";

/**
 * A container for the id of the {@link ProviderRegistration} requested/created.
 **/
export class ContentCode {
	/**
	 * Creates a {@link ContentCode} from a JSON object.
	 * @param json - JSON object to create the {@link ContentCode} from.
	 * @returns A {@link ContentCode} instance or nothing.
	 */
	static fromJSON(json: any): ContentCode | nothing {
		return json
			? new ContentCode(json)
			: null;
	}

	/**
	 * Identifier given as input for the command.
	 **/
	code: string;

	constructor(json: any) {
		this.code = json?.code ?? "";
	}
}