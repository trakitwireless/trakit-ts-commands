import { codified, email, guid, storage, ulong } from '@trakit/objects';
import { ReplySync } from './ReplySync';
import { IContent } from './Content/IContent';
import { IContentCompany } from './Content/IContentCompany';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 **/
export abstract class ReplySyncBatchDelete extends ReplySync {
	/**
	 * Returns the constructed object.
	 */
	protected abstract _getKeys(): string[] | guid[] | email[] | codified[] | ulong[];
	/**
	 * Returns the results of the batch delete.
	 */
	abstract getResults(): (IContent & IContentCompany)[];

	/**
	 * Adds or updates the constructed object to storage (and maybe IndexedDB).
	 */
	override store(): boolean {
		const map = storage[this._typeName];
		return this._getKeys().map(key => map.delete(key)).some(d => d);
	}
}