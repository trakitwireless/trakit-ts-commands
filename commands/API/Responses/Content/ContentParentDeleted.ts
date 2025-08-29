import { uint, ulong } from "@trakit/objects";
import { ContentId } from "./ContentId";

/**
 * For delete/restore commands, this contains the id, owning {@link Company.parent}, and deleted state.
 **/
export class ContentParentDeleted extends ContentId {
	/**
	 * Identifier of the {@link Company|parent} to which the {@link Company} is a child.
	 **/
	parent!: ulong;
	/**
	 * Flag showing if the object is deleted.
	 **/
	deleted!: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	v!: uint[];
}