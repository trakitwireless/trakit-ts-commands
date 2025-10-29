import { IDeserializable, IRequestable, ISerializable } from '@trakit/objects';
import { ReplySync } from './ReplySync';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 **/
export abstract class ReplySyncList<TRequestable extends IRequestable> extends ReplySync {
	/**
	 * Returns the constructed collection of objects.
	 */
	abstract getCollection(): TRequestable[];
	/**
	 * Adds or updates the constructed objects to storage (and maybe IndexedDB).
	 */
	override store(): void {
		const map = this._getStorage(),
			collection = this.getCollection();
		for (let i = 0; i < collection.length; i++) {
			const item = collection[i] as unknown as IRequestable & ISerializable,
				key = item.getKey(),
				stored = map.get(key) as unknown as IDeserializable;
			if (!stored) map.set(key, item);
			else stored.fromJSON(item.toJSON());
		}
	}
}