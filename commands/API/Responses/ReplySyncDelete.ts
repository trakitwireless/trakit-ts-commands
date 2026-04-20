import { codified, email, guid, storage, ulong } from '@trakit/objects';
import { ReplySync } from './ReplySync';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 */
export abstract class ReplySyncDelete extends ReplySync {
	/**
	 * Returns the constructed object.
	 */
	abstract getKey(): string | guid | email | codified | ulong;
	/**
	 * Adds or updates the constructed object to storage (and maybe IndexedDB).
	 */
	override store(): boolean {
		const map = storage[this.syncName],
			key = this.getKey();
		return map.delete(key);
	}
}