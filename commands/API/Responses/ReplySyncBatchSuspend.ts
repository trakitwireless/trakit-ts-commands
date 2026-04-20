import { codified, email, guid, IDeserializable, IRequestable, ISerializable, storage, ulong } from '@trakit/objects';
import { ReplySyncBatch } from './ReplySyncBatch';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 */
export abstract class ReplySyncBatchSuspend extends ReplySyncBatch {
	/**
	 * Adds or updates the constructed object to storage (and maybe IndexedDB).
	 */
	override store(): boolean {
		const map = storage[this.syncName] as Map<ulong | guid | email | codified | string, IRequestable>;
		return this.getResults().map(item => {
			const stored = map.get(item.getKey()) as unknown as IDeserializable;
			return stored?.fromJSON((item as unknown as ISerializable).toJSON()) ?? false;
		}).some(s => s);
	}
}