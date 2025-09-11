import { Behaviour, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link behaviour}.
 **/
export class RepBehaviourGet extends Reply {
	/**
	 * The requested {@link Behaviour}.
	 **/
	behaviour: Behaviour | nothing;

	constructor(json?: any) {
		super(json);
		if (json?.behaviour) {
			this.behaviour = new Behaviour(json.behaviour);
		}
	}
}