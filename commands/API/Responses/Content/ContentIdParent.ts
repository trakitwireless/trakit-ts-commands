import { nothing, ulong } from "@trakit/objects";
import { ContentId } from "./ContentId";

/**
 * A container for the id and the requested/created {@link Company.parent}.
 **/
export class ContentIdParent extends ContentId {
	/**
	 * Identifier of the parent to which this company belongs
	 **/
	parent!: ulong | nothing;
}