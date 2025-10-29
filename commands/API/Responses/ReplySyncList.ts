import { IDeserializable, IRequestable, JsonObject, storage, utility } from '@trakit/objects';
import { ReplySync } from './ReplySync';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 **/
export abstract class ReplySyncList<TRequestable extends IRequestable> extends ReplySync<JsonObject[]> {
	constructor(json: JsonObject) {
		super(json);
		this._json = json?.[utility.plural(utility.capitalize(this._getTypeName(), false))] as JsonObject[];
	}

	/**
	 * Returns the constructed collection of objects.
	 */
	abstract getCollection(): TRequestable[];
	/**
	 * Adds or updates the constructed objects to storage (and maybe IndexedDB).
	 */
	override store(): void {
		const map = storage[this._getTypeName()],
			collection = this.getCollection();
		for (let i = 0; i < collection.length; i++) {
			const json = this._json[i],
				item = collection[i],
				key = item.getKey(),
				stored = map.get(key) as unknown as IDeserializable;
			if (!stored) map.set(key, item);
			else stored.fromJSON(json);
		}
	}
}