import { nothing, ProviderRegistration } from "@trakit/objects";
import { ContentCodeCompany } from "./ContentCodeCompany";

/**
 * A container for the id of the {@link ProviderRegistration} requested/created.
 * For delete/restore commands, this contains the {@link ProviderRegistration.code}, owning {@link Company.id}, and deleted state.
 **/
export class ContentCodeDeleted extends ContentCodeCompany {
	/**
	 * Creates a {@link ContentCodeDeleted} from a JSON object.
	 * @param json - JSON object to create the {@link ContentCodeDeleted} from.
	 * @returns A {@link ContentCodeDeleted} instance or nothing.
	 */
	static override fromJSON(json: any): ContentCodeDeleted | nothing {
		return json
			? new ContentCodeDeleted(json)
			: null;
	}

	/**
	 * Flag showing if the object is deleted.
	 **/
	deleted: boolean;

	constructor(json: any) {
		super(json);
		this.deleted = !!(json?.deleted);
	}
}