import { BaseComponent, BaseCompound, email, guid, IDeserializable, IRequestable, ISerializable, objects, storage, ulong } from '@trakit/objects';
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
		const map = storage[this._getTypeName()] as Map<string | guid | email | ulong, IRequestable>,
			collection = this.getCollection();
		for (let i = 0; i < collection.length; i++) {
			const obj = collection[i] as unknown as IRequestable & ISerializable,
				key = obj.getKey(),
				stored = map.get(key) as unknown as IDeserializable;
			if (!stored) map.set(key, obj);
			else stored.fromJSON(obj.toJSON());
		}
	}
}
/**
 * Base class for all responses from commands that deal with compound objects.
 */
export abstract class ReplySyncListPiece<TRequestable extends BaseComponent> extends ReplySyncList<TRequestable> {
	/**
	 * Creates a blank instance of the compound object.
	 */
	protected abstract _createBlank(): BaseCompound;
	/**
	 * Returns the index of the piece in the {@link BaseCompound} to sync.
	 */
	protected abstract _getPieceIndex(): number;
	/**
	 * Adds or updates the constructed objects to storage (and maybe IndexedDB).
	 */
	override store(): void {
		const type = this._getTypeName(),
			map = storage[type] as Map<string | guid | email | ulong, BaseCompound>;
		for (const obj of this.getCollection()) {
			const key = obj.getKey();
			let stored = map.get(key) as unknown as BaseCompound;
			if (!stored) map.set(key, stored = this._createBlank());
			stored.pieces[this._getPieceIndex()].fromJSON(obj.toJSON());
		}
	}
}