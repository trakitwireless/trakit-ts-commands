import { nothing, ulong } from "@trakit/objects";
import { ContentId } from "./ContentId";

/**
 * A container for the id and the requested/created {@link Company.parent}.
 **/
export class ContentIdParent extends ContentId {
	/**
	 * Creates a {@link ContentIdParent} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdParent} from.
	 * @returns A {@link ContentIdParent} instance or nothing.
	 */
	static override fromJSON(json: any): ContentIdParent | nothing {
		return json
			? new ContentIdParent(json)
			: null;
	}

	/**
	 * Identifier of the parent to which this company belongs
	 **/
	parent: ulong | nothing;

	constructor(json: any) {
		super(json);
		this.parent = json?.parent;
	}
}