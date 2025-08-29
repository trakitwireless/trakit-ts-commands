import { uint } from "@trakit/objects";
import { ContentLoginCompany } from "./ContentLoginCompany";

/**
 * For delete/restore commands, this contains the {@link User} login, version keys, owning {@link Company.id}, and deleted state.
 **/
export class ContentLoginDeleted extends ContentLoginCompany {
	/**
	 * Flag showing if the object is deleted.
	 **/
	deleted!: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	v!: uint[];
}