import { Behaviour, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link behaviour}.
 **/
export class RepBehaviourGet extends ReplySyncGet<Behaviour> {
	/**
	 * The requested {@link Behaviour}.
	 **/
	behaviour: Behaviour | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.behaviour) {
			this.behaviour = new Behaviour(json.behaviour as JsonObject);
		}
	}
}