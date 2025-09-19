import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdendifierDeleted } from "commands";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Provider}.
	 **/
	provider: ContentIdendifierDeleted | nothing;

	constructor(json: any) {
		super(json);
		this.provider = ContentIdendifierDeleted.fromJSON(json?.provider);
	}
}