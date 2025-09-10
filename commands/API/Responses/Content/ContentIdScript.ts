import { nothing, ulong } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";

/**
 * A container for the id, script id, and owning {@link Company.id} of the object requested/created.
 **/
export class ContentIdScript extends ContentIdCompany {
	/**
	 * Identifier of the script to which this object belongs.
	 **/
	script: ulong | nothing;
	
	constructor(json: any) {
		super(json);
		this.script = json?.script;
	}
}