import { email, guid, storage, ulong } from '@trakit/objects';
import { ReplySync } from './ReplySync';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 **/
export abstract class ReplySyncBatchDelete extends ReplySync {
	/**
	 * Returns the constructed object.
	 */
	protected abstract _getKeys(): string[] | guid[] | email[] | ulong[];
	/**
	 * Adds or updates the constructed object to storage (and maybe IndexedDB).
	 */
	override store(): void {
		const map = storage[this._typeName];
		this._getKeys().forEach(key => map.delete(key));
	}
}