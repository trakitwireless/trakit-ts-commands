import { nothing, ulong } from "@trakit/objects";
import { ContentKey } from "./ContentKey";

/**
 * A container for the {@link Machine.key} and owning {@link Company.id} of the {@link Machine} requested/created.
 **/
export class ContentKeyCompany extends ContentKey {
	/**
	 * Creates a {@link ContentKeyCompany} from a JSON object.
	 * @param json - JSON object to create the {@link ContentKeyCompany} from.
	 * @returns A {@link ContentKeyCompany} instance or nothing.
	 */
	static override fromJSON(json: any): ContentKeyCompany | nothing {
		return json
			? new ContentKeyCompany(json)
			: null;
	}

	/**
	 * Identifier of the {@link Company} to which the {@link Machine} belongs.
	 **/
	company: ulong | nothing;

	constructor(json: any) {
		super(json);
		this.company = json?.company;
	}
}