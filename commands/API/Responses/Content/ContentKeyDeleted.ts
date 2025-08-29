import { uint } from "@trakit/objects";
import { ContentKeyCompany } from "./ContentKeyCompany";

/**
 * For delete/restore commands, this contains the {@link Machine.key}, version keys, owning {@link Company.id}, and deleted state.
 **/
export class ContentKeyDeleted extends ContentKeyCompany {
	/**
	 * Flag showing if the object is deleted.
	 **/
	deleted!: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	v!: uint[];
}