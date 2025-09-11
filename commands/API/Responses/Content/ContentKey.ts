import { nothing } from "@trakit/objects";

/**
 * A container for the key of the {@link Machine} requested/created.
 **/
export class ContentKey {
	/**
	 * Creates a {@link ContentId} from a JSON object.
	 * @param json - JSON object to create the {@link ContentId} from.
	 * @returns A {@link ContentId} instance or nothing.
	 */
	static fromJSON(json: any): ContentKey | nothing {
		return json
			? new ContentKey(json)
			: null;
	}

	/**
	 * The {@link Machine}'s key.
	 **/
	key: string;

	constructor(json: any) {
		this.key = json?.key ?? "";
	}
}