import { classes, IRequestable, JsonValue } from '@trakit/objects';
import { Reply } from './Reply';

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 **/
export abstract class ReplyBaseGetter<TJson extends JsonValue> extends Reply {
	protected _json!: TJson;
	protected abstract _getTypeName(): classes;
	abstract store(): void;
}