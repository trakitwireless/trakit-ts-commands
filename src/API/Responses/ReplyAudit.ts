import {
	IDeserializable,
	IRequestable,
	ISerializable,
	JsonObject,
	nothing,
	utility
} from '@trakit/objects';
import { Reply } from './Reply';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 */
export abstract class ReplyAudit<TRequestable extends IRequestable & ISerializable & IDeserializable> extends Reply {
	/**
	 * The date to start the list from.
	 */
	after: Date | nothing;
	/**
	 * The date to end the list at.
	 */
	before: Date | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.after) this.after = utility.date(json.after as string);
		if (json?.before) this.before = utility.date(json.before as string);
	}

	/**
	 * Returns the constructed collection of objects.
	 */
	abstract getList(): TRequestable[];
}