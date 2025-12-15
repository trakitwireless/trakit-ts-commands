import { codified, email, FormResult, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link formResults}.
 */
export abstract class RepFormResultList extends ReplySyncList<FormResult> {
	/**
	 * The list of requested {@link FormResult}s.
	 */
	formResults: FormResult[] | nothing;

	constructor(json: JsonObject) {
		super(json, "FormResult");
		this.formResults = (json?.formResults as JsonObject[])?.map((item: any) => new FormResult(item));
	}
	override getList() { return this.formResults as FormResult[]; }
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
	override _filterCollection(pair: [ulong | guid | email | codified | string, FormResult], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}