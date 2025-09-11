import { nothing } from "@trakit/objects";

/**
 * A container for the id of the {@link Provider} requested/created.
 **/
export class ContentIdendifier {
	/**
	 * Creates a {@link ContentId} from a JSON object.
	 * @param json - JSON object to create the {@link ContentId} from.
	 * @returns A {@link ContentId} instance or nothing.
	 */
	static fromJSON(json: any): ContentIdendifier | nothing {
		return json
			? new ContentIdendifier(json)
			: null;
	}

	/**
	 * Identifier given as input for the command.
	 **/
	id: string;

	constructor(json: any) {
		this.id = json?.id ?? "";
	}
}