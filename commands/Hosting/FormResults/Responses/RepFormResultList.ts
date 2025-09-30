import { FormResult, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link formResults}.
 */
export abstract class RepFormResultList extends Reply {
	/**
	 * The list of requested {@link FormResult}s.
	 */
	formResults: FormResult[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.formResults = (json?.formResults as JsonObject[])?.map((item: any) => new FormResult(item));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepFormResultListByCompany extends RepFormResultList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}