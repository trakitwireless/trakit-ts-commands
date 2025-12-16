import { JsonObject, nothing, serialization, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters for a {@link User} to update their own {@link Contact}.
 */
export class ParamSelfContactMerge extends ParamMergeSubscribable {
	/**
	 * Name for yourself.
	 */
	name: string | nothing;
	/**
	 * Notes for yourself.
	 */
	notes: string | nothing;
	/**
	 * A collection of other names this person might go by.
	 * Use the object key like a name identifier.
	 * Example keys: Initials, Nickname, Maiden Name, etc.
	 */
	otherNames: Map<string, string | nothing> | nothing;
	/**
	 * Email addresses
	 * Use the object key like a name of the address.
	 * Example keys: Home, Work, Support, Old, etc.
	 */
	emails: Map<string, string | nothing> | nothing;
	/**
	 * Phone numbers.
	 * Use the object key like a name of the phone number.
	 * Example keys: Mobile, Fax, Home, Office, etc.
	 */
	phones: Map<string, ulong | nothing> | nothing;
	/**
	 * Mailing addresses
	 * Use the object key like a name of the address.
	 * Example keys: Home, Work, Park, etc.
	 */
	addresses: Map<string, string | nothing> | nothing;
	/**
	 * Websites and other online resources
	 * Use the object key like a name of the address.
	 * Example keys: Downloads, Support, FTP, etc.
	 */
	urls: Map<string, URL | nothing> | nothing;
	/**
	 * Date information
	 * Use the object key like a name of the date.
	 * Example keys: Birthday, Started Date, Retired On, etc.
	 */
	dates: Map<string, Date | nothing> | nothing;
	/**
	 * Uncategorized information
	 * Use the object keys and values however you'd like.
	 */
	options: Map<string, string | nothing> | nothing;
	/**
	 * A list of roles they play in the {@link Company}.
	 */
	roles: string[] | nothing;
	/**
	 * {@link Picture}s of yourself.
	 */
	pictures: ulong[] | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.name = json?.name as string ?? "";
		this.notes = json?.notes as string ?? "";
		this.otherNames = json?.otherNames
			? serialization.toMap(json?.otherNames as object)
			: null;
		this.emails = json?.emails
			? serialization.toMap(json?.emails as object)
			: null;
		this.phones = json?.phones
			? serialization.toMap(json?.phones as object)
			: null;
		this.addresses = json?.addresses
			? serialization.toMap(json?.addresses as object)
			: null;
		this.urls = json?.urls
			? serialization.toMap(json?.urls as object)
			: null;
		this.dates = json?.dates
			? serialization.toMap(json?.dates as object)
			: null;
		this.options = json?.options
			? serialization.toMap(json?.options as object)
			: null;
		this.roles = json?.roles as string[];
		this.pictures = (json?.pictures as JsonObject[])?.map((v: any) => utility.id(v));
	}

	override toJSON() {
		const json: any = {};
		if (this.name) json["name"] = this.name;
		if (this.notes) json["notes"] = this.notes;
		if (this.otherNames?.size) json["otherNames"] = serialization.fromMap(this.otherNames);
		if (this.emails?.size) json["emails"] = serialization.fromMap(this.emails);
		if (this.phones?.size) json["phones"] = serialization.fromMap(this.phones);
		if (this.addresses?.size) json["addresses"] = serialization.fromMap(this.addresses);
		if (this.urls?.size) json["urls"] = serialization.fromMap(this.urls);
		if (this.dates?.size) json["dates"] = serialization.fromMap(this.dates);
		if (this.options?.size) json["options"] = serialization.fromMap(this.options);
		if (this.roles?.length) json["roles"] = [...this.roles];
		if (this.pictures?.length) json["pictures"] = [...this.pictures];
		return json;
	}
}