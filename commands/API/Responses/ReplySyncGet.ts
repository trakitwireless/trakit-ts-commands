import { IDeserializable, IRequestable, ISerializable, JsonObject, storage, utility } from '@trakit/objects';
import { ReplySync } from './ReplySync';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 **/
export abstract class ReplySyncGet<TRequestable extends IRequestable> extends ReplySync {
	/**
	 * Returns the constructed object.
	 */
	abstract getObject(): TRequestable;
	/**
	 * Adds or updates the constructed object to storage (and maybe IndexedDB).
	 */
	override store(): void {
		const map = this._getStorage(),
			obj = this.getObject() as unknown as IRequestable & ISerializable,
			key = obj.getKey(),
			stored = map.get(key) as unknown as IDeserializable;
		if (!stored) map.set(key, obj);
		else stored.fromJSON(obj.toJSON());
	}
}