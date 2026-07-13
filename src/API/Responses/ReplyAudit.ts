import {
    IDeserializable,
    IRequestable,
    ISerializable,
    JsonObject,
    nothing,
    ulong,
    utility,
} from '@trakit/objects';
import { ContentAudit } from './Content/ContentAudit';
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
	/**
	 * The lowest version key for the requested object.
	 */
	lowest: ulong | nothing;
	/**
	 * The highest version key for the requested object.
	 */
	highest: ulong | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.after) this.after = utility.date(json.after as string);
		if (json?.before) this.before = utility.date(json.before as string);
		if (json?.lowest) this.lowest = utility.id(json.lowest) as ulong;
		if (json?.highest) this.highest = utility.id(json.highest) as ulong;
	}

	/**
	 * Returns the constructed collection of objects.
	 */
	abstract getList(): ContentAudit<TRequestable>[];
}