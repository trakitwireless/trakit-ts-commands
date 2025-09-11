import { nothing, ulong } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";

/**
 * A container for the id, script id, and owning {@link Company.id} of the object requested/created.
 **/
export class ContentIdScript extends ContentIdCompany {
	/**
	 * Creates a {@link ContentIdScript} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdScript} from.
	 * @returns A {@link ContentIdScript} instance or nothing.
	 */
	static override fromJSON(json: any): ContentIdScript | nothing {
		return json
			? new ContentIdScript(json)
			: null;
	}

	/**
	 * Identifier of the script to which this object belongs.
	 **/
	script: ulong | nothing;
	
	constructor(json: any) {
		super(json);
		this.script = json?.script;
	}
}