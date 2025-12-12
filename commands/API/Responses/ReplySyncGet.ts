import {
	BaseComponent,
	BaseCompound,
	codified,
	email,
	guid,
	IDeserializable,
	IRequestable,
	ISerializable,
	JsonObject,
	storage,
	SyncName,
	ulong
} from '@trakit/objects';
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
		const map = storage[this._typeName] as Map<ulong | guid | email | codified | string, IRequestable>,
			obj = this.getObject() as unknown as IRequestable & ISerializable,
			key = obj.getKey(),
			stored = map.get(key) as unknown as IDeserializable;
		if (!stored) map.set(key, obj);
		else stored.fromJSON(obj.toJSON());
	}
}
/**
 * Base class for all responses from commands that deal with compound objects.
 */
export abstract class ReplySyncGetPiece<TRequestable extends BaseComponent> extends ReplySyncGet<TRequestable> {
	/**
	 * Returns the index of the piece in the {@link BaseCompound} to sync.
	 */
	readonly _pieceIndex: number;

	constructor(json: JsonObject, type: SyncName, index: number) {
		super(json, type);
		this._pieceIndex = index;
	}

	/**
	 * Creates a blank instance of the compound object.
	 */
	protected abstract _createBlank(): BaseCompound;
	/**
	 * Adds or updates the constructed object to storage (and maybe IndexedDB).
	 */
	override store(): void {
		const map = storage[this._typeName] as Map<ulong | guid | email | codified | string, BaseCompound>,
			obj = this.getObject() as unknown as BaseCompound,
			key = obj.getKey();
		let stored = map.get(key) as unknown as BaseCompound;
		if (!stored) map.set(key, stored = this._createBlank());
		stored.pieces[this._pieceIndex].fromJSON(obj.toJSON());
	}
}