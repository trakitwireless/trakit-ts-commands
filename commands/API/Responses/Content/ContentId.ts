import { nothing, ulong } from "@trakit/objects";

/**
 * A container for the id of the object requested.
 **/
export class ContentId {
	/**
	 * Identifier given as input for the command.
	 **/
	id: ulong | nothing;

	constructor(json: any) {
		this.id = json.id;
	}
}