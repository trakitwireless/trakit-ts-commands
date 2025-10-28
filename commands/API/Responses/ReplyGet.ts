import { IDeserializable, IRequestable, JsonObject, storage, utility } from '@trakit/objects';
import { ReplyBaseGetter } from './ReplyBaseGetter';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 **/
export abstract class ReplyGet<TRequestable extends IRequestable> extends ReplyBaseGetter<JsonObject> {

	constructor(json: JsonObject) {
		super(json);
		this._json = json?.[utility.capitalize(this._getTypeName(), false)] as JsonObject;
	}

	abstract getObject(): TRequestable;
	override store(): void {
		const map = storage[this._getTypeName()],
			obj = this.getObject(),
			key = obj.getKey(),
			stored = map.get(key) as unknown as IDeserializable;
		if (!stored) map.set(key, obj);
		else stored.fromJSON(this._json);
	}
}