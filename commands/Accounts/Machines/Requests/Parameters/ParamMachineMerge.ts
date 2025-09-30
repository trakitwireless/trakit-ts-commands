import { codified, datetime, ipv4, JsonObject, nothing, serialization, SystemsOfUnits, Timezone, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamPermission } from "../../../Permissions/ParamPermission";

/**
 * Parameters used to create or update an {@link Machine}.
 **/
export class ParamMachineMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link Machine} you want to update.
	 * <override required="update" />
	 **/
	key: string | nothing;
	/**
	 * A flag to either remove, or generate a new {@link Machine.secret}.
	 **/
	secret: boolean | nothing;
	/**
	 * The company to which this {@link Machine} belongs.
	 * After creation, this value is read-only.
	 * <override required="create" />
	 **/
	company: ulong | nothing;
	/**
	 * Human friendly name for this {@link Machine}.
	 * <override max-length="100" />
	 **/
	nickname: string;
	/**
	 * Notes about this {@link Machine}.
	 * <override max-length="8000" />
	 **/
	notes: string | nothing;
	/**
	 * Indicates whether system access is disable.
	 **/
	enabled: boolean | nothing;
	/**
	 * An optional timestamp that restricts this {@link Machine} from being used before the given date.
	 **/
	notBefore: Date | nothing;
	/**
	 * An optional timestamp that restricts this {@link Machine} from being used after the given date.
	 **/
	notAfter: Date | nothing;

	/**
	 * The {@link Machine}'s local timezone.
	 * @see {@link Timezone.code}
	 * <override type="System.String" format="codified" />
	 **/
	timezone: Timezone | nothing;
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 * <override min-length="2" max-length="5" />
	 **/
	language: string;
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 * <override keys="codified" max-values-length="20" />
	 **/
	formats: Map<string, string>;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 * <override keys="codified" />
	 **/
	measurements: Map<string, SystemsOfUnits | nothing>;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 * <override keys="codified" max-values-length="20" />
	 **/
	options: Map<string, string | nothing>;

	/**
	 * A list of {@link MachineGroup} to which this {@link Machine} belongs.
	 * <override>
	 * <values>
	 * @see {@link MachineGroup.id}
	 * </values>
	 * </override>
	 **/
	groups: ulong[];
	/**
	 * Individual permission rules which override the {@link MachineGroup} rules.
	 **/
	permissions: ParamPermission[];
	/**
	 * List of Fleet Freedom service URIs that this {@link Machine} is permitted to access.
	 * <override>
	 * <values type="System.String" max-length="254" format="url" />
	 * </override>
	 **/
	services: URL[];
	/**
	 * Optional list of your managed domains from which this {@link Machine} can be used.
	 * <override>
	 * <values type="System.String" max-length="254" format="url" />
	 * </override>
	 **/
	referrers: URL[];
	/**
	 * Restrict {@link Machine} access to only the provided IPv4 ranges (using CIDR slash-notation).
	 * <override>
	 * <values max-length="19" format="ipv4" />
	 * </override>
	 **/
	ipRanges: string[];
	/**
	 * Indicates whether completely insecure/unrestricted system access is allowed.
	 **/
	insecure: boolean | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.key = json?.key as string;
		this.secret = !!json?.secret;
		this.company = json?.company as ulong;
		this.nickname = json?.nickname as string;
		this.notes = json?.notes as string;
		this.enabled = !!json?.enabled;
		this.notBefore = json?.notBefore ? utility.date(json.notBefore as datetime) : null;
		this.notAfter = json?.notAfter ? utility.date(json.notAfter as datetime) : null;
		this.timezone = utility.findTimeZoneById(json?.timezone as codified);
		this.language = json?.language as codified;
		this.formats = serialization.toMap(json?.formats as object ?? {});
		this.measurements = serialization.toMap(json?.measurements as object ?? {});
		this.options = serialization.toMap(json?.options as object ?? {});
		this.groups = json?.groups as ulong[];
		this.permissions = (json?.permissions as JsonObject[])?.map((p: any) => new ParamPermission(p));
		this.services = (json?.services as JsonObject[])?.map((s: any) => new URL(s));
		this.referrers = (json?.referrers as JsonObject[])?.map((r: any) => new URL(r));
		this.ipRanges = json?.ipRanges as ipv4[];
		this.insecure = !!json?.insecure;
	}

	override toJSON(): any {
		const json: any = {};
		if (this.key) {
			json["key"] = this.key;
			json["v"] = [...this.v];
		} else if (utility.isntNaN(this.company)) {
			json["company"] = this.company;
		}
		if (this.secret) json["secret"] = this.secret;
		if (this.nickname) json["nickname"] = this.nickname;
		if (this.notes) json["notes"] = this.notes;
		if (!utility.isNothing(this.enabled)) json["enabled"] = this.enabled;
		if (!isNaN(this.notBefore?.valueOf() as number)) json["notBefore"] = this.notBefore?.toISOString();
		if (!isNaN(this.notAfter?.valueOf() as number)) json["notAfter"] = this.notAfter?.toISOString();
		if (this.timezone?.code) json["timezone"] = this.timezone?.code;
		if (this.language) json["language"] = this.language;
		if (this.formats?.size) json["formats"] = serialization.fromMap(this.formats);
		if (this.measurements?.size) json["measurements"] = serialization.fromMap(this.measurements);
		if (this.options?.size) json["options"] = serialization.fromMap(this.options);
		if (this.groups?.length) json["groups"] = this.groups;
		if (this.permissions?.length) json["permissions"] = this.permissions?.map(p => p.toJSON());
		if (this.services?.length) json["services"] = this.services.map(s => s.toString());
		if (this.referrers?.length) json["referrers"] = this.referrers.map(r => r.toString());
		if (this.ipRanges?.length) json["ipRanges"] = this.ipRanges;
		if (!utility.isNothing(this.insecure)) json["insecure"] = this.insecure;
		return json;
	}
}