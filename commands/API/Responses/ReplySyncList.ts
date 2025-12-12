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
	ulong,
} from '@trakit/objects';
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
	 * Filters the existing stored collection to determine which objects are a part of this synchronization operation.
	 * For listing commands, this will filter out only those objects that match the company or asset to which these objects belong.
	 * @param pair 
	 * @param index 
	 */
	abstract _filterCollection(pair: [ulong | guid | email | codified | string, TRequestable], index: number): boolean;
	/**
	 * Returns the key for the given pair.
	 */
	_keyCollection(pair: [ulong | guid | email | codified | string, TRequestable], index: number) { return pair[0]; }
	/**
	 * Adds or updates the constructed objects to storage (and maybe IndexedDB).
	 * @param map 
	 * @param key 
	 * @param obj 
	 */
	_store(
		map: Map<ulong | guid | email | codified | string, TRequestable>,
		obj: TRequestable
	): ulong | guid | email | codified | string {
		const key = obj.getKey(),
			stored = map.get(key) as unknown as IDeserializable;
		if (!stored) map.set(key, obj);
		else stored.fromJSON((obj as unknown as ISerializable).toJSON());
		return key;
	}
	
	/**
	 * Adds or updates the constructed objects to storage (and maybe IndexedDB).
	 */
	override store(): void {
		const map = storage[this._typeName] as Map<ulong | guid | email | codified | string, TRequestable>,
			existing: Set<ulong | guid | email | codified | string> = new Set(
				map.entries()
					.filter(this._filterCollection)
					.map(this._keyCollection)
			);
		for (const obj of this.getCollection()) {
			const key = this._store(map, obj);
			existing.delete(key);
		}
		for (const key of existing) {
			map.delete(key);
		}
	}
}
/**
 * Base class for all responses from commands that deal with compound objects.
 */
export abstract class ReplySyncListPiece<TRequestable extends BaseComponent> extends ReplySyncList<TRequestable> {
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
	 * This override synchronizes only the piece of the compound object, and creates a blank object if it does not exist.
	 */
	override _store(
		map: Map<ulong | guid | email | codified | string, TRequestable>,
		obj: TRequestable
	): ulong | guid | email | codified | string {
		const key = obj.getKey();
		let stored = map.get(key) as unknown as BaseCompound;
		if (!stored) map.set(key, stored = this._createBlank() as TRequestable & BaseCompound);
		stored.pieces[this._pieceIndex].fromJSON(obj.toJSON());
		return key;
	}
}