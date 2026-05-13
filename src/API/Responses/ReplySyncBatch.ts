import { codified, email, guid, ulong } from '@trakit/objects';
import { IContent } from './Content/IContent';
import { IContentCompany } from './Content/IContentCompany';
import { ReplySync } from './ReplySync';

/**
 * Base class for all batch command responses.
 */
export abstract class ReplySyncBatch extends ReplySync {
	/**
	 * Returns the constructed object.
	 */
	protected abstract _getKeys(): string[] | guid[] | email[] | codified[] | ulong[];
	/**
	 * Returns the results of the batch delete.
	 */
	abstract getResults(): (IContent & IContentCompany)[];
}