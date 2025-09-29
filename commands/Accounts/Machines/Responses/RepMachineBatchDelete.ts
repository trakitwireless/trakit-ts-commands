import { ContentKeyDeleted } from "../../../API/Responses/Content/ContentKeyDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Machine}.
	 **/
	machines: ContentKeyDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.machines = json?.machines?.map((m: any) => new ContentKeyDeleted(m));
	}
}