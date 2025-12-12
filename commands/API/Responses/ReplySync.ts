import { Company, JsonObject, SyncName, ulong } from '@trakit/objects';
import { IContentCompany } from './Content/IContentCompany';
import { Reply } from './Reply';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 **/
export abstract class ReplySync extends Reply implements IContentCompany {
	/**
	 * Returns the type name of the object so we know how to construct it.
	 */
	readonly _typeName: SyncName;

	constructor(json: JsonObject, type: SyncName) {
		super(json);
		this._typeName = type;
	}

	/**
	 * Adds or updates the constructed object to storage (and maybe IndexedDB).
	 * @returns True if the storage was modified, false otherwise.
	 */
	abstract store(): boolean;
	/**
	 * Returns the {@link Company.id} associated with this response.
	 */
	abstract getCompanyId(): ulong;
}