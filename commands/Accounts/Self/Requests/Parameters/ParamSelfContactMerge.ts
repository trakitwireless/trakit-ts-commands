import { nothing, serialization, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters for a {@link User} to update their own {@link Contact}.
 **/
export class ParamSelfContactMerge extends ParamMergeSubscribable {
	/**
	 * Name for yourself.
	 **/
	name: string | nothing;
	/**
	 * Notes for yourself.
	 **/
	notes: string | nothing;
	/**
	 * A collection of other names this person might go by.
	 * Use the object key like a name identifier.
	 * Example keys: Initials, Nickname, Maiden Name, etc.
	 **/
	otherNames: Map<string, string | nothing>;
	/**
	 * Email addresses
	 * Use the object key like a name of the address.
	 * Example keys: Home, Work, Support, Old, etc.
	 **/
	emails: Map<string, string | nothing>;
	/**
	 * Phone numbers.
	 * Use the object key like a name of the phone number.
	 * Example keys: Mobile, Fax, Home, Office, etc.
	 **/
	phones: Map<string, ulong | nothing>;
	/**
	 * Mailing addresses
	 * Use the object key like a name of the address.
	 * Example keys: Home, Work, Park, etc.
	 **/
	addresses: Map<string, string | nothing>;
	/**
	 * Websites and other online resources
	 * Use the object key like a name of the address.
	 * Example keys: Downloads, Support, FTP, etc.
	 **/
	urls: Map<string, URL | nothing>;
	/**
	 * Date information
	 * Use the object key like a name of the date.
	 * Example keys: Birthday, Started Date, Retired On, etc.
	 **/
	dates: Map<string, Date | nothing>;
	/**
	 * Uncategorized information
	 * Use the object keys and values however you'd like.
	 **/
	options: Map<string, string | nothing>;
	/**
	 * A list of roles they play in the {@link Company}.
	 **/
	roles: string[] | nothing;
	/**
	 * {@link Picture}s of yourself.
	 **/
	pictures: ulong[] | nothing;

	constructor(json: any) {
		super(json);
		this.name = json?.name || "";
		this.notes = json?.notes || "";
		this.otherNames = new Map(Object.entries(json?.otherNames || {}));
		this.emails = new Map(Object.entries(json?.emails || {}));
		this.phones = new Map(Object.entries(json?.phones || {}).map(([k, v]) => [k, v ? utility.phoneNumber(v as string) : null]));
		this.addresses = new Map(Object.entries(json?.addresses || {}));
		this.urls = new Map(Object.entries(json?.urls || {}).map(([k, v]) => [k, v ? new URL(v as string) : null]));
		this.dates = new Map(Object.entries(json?.dates || {}).map(([k, v]) => [k, v ? utility.date(v as any) : null]));
		this.options = new Map(Object.entries(json?.options || {}));
		this.roles = json?.roles || [];
		this.pictures = (json?.pictures || []).map((v: any) => utility.id(v));
	}

	override toJSON() {
		const json: any = {};
		if (this.name) json["name"] = this.name;
		if (this.notes) json["notes"] = this.notes;
		if (this.otherNames.size) json["otherNames"] = serialization.fromMap(this.otherNames);
		if (this.emails.size) json["emails"] = serialization.fromMap(this.emails);
		if (this.phones.size) json["phones"] = serialization.fromMap(this.phones);
		if (this.addresses.size) json["addresses"] = serialization.fromMap(this.addresses);
		if (this.urls.size) json["urls"] = serialization.fromMap(this.urls);
		if (this.dates.size) json["dates"] = serialization.fromMap(this.dates);
		if (this.options.size) json["options"] = serialization.fromMap(this.options);
		if (this.roles?.length) json["roles"] = [...this.roles];
		if (this.pictures?.length) json["pictures"] = [...this.pictures];
		return json;
	}
}