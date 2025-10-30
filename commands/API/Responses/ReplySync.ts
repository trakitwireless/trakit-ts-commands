import { classes, JsonObject } from '@trakit/objects';
import { Reply } from './Reply';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 **/
export abstract class ReplySync extends Reply {
	/**
	 * Returns the type name of the object so we know how to construct it.
	 */
	readonly _typeName: classes;

	constructor(json: JsonObject, type: classes) {
		super(json);
		this._typeName = type;
	}

	/**
	 * Adds or updates the constructed object to storage (and maybe IndexedDB).
	 */
	abstract store(): void;
}