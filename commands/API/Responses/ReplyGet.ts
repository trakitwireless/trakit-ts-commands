import { Base, classes, Contact, IDeserializable, IRequestable, ISerializable, JsonObject, nothing, storage, ulong, utility } from '@trakit/objects';
import { Reply } from './Reply';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 **/
export abstract class ReplyGet<TRequestable extends IRequestable> extends Reply {

	protected _json: JsonObject | nothing;
	abstract getTypeName(): classes;
	abstract getObject(): TRequestable;

	constructor(json: JsonObject) {
		super(json);
		this._json = json?.[utility.capitalize(this.getTypeName())] as JsonObject;
	}

	store(): void {
		const map = storage[this.getTypeName()],
			obj = this.getObject(),
			key = obj.getKey(),
			stored = map.get(key) as unknown as IDeserializable;
		if (!stored) map.set(key, obj);
		else stored.fromJSON(this._json as JsonObject);
	}
}