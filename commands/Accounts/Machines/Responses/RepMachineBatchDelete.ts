import { JsonObject, nothing } from "@trakit/objects";
import { ContentKeyDeleted } from "../../../API/Responses/Content/ContentKeyDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Machine}.
	 **/
	machines: ContentKeyDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.machines = (json?.machines as JsonObject[])?.map((m: any) => new ContentKeyDeleted(m));
	}
}