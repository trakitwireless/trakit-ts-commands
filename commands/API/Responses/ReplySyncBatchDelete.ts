import { storage } from '@trakit/objects';
import { ReplySyncBatch } from './ReplySyncBatch';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 */
export abstract class ReplySyncBatchDelete extends ReplySyncBatch {
	/**
	 * Adds or updates the constructed object to storage (and maybe IndexedDB).
	 */
	override store(): boolean {
		const map = storage[this._typeName];
		return this._getKeys().map(key => map.delete(key)).some(d => d);
	}
}