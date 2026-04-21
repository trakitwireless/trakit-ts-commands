import { codified, JsonObject, nothing, serialization, SyncName, SystemsOfUnits, Timezone, UserNotifications, utility } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";

/**
 * Allows a session {@link User} to change their own preferences.
 */
export class PaySelfPreferences extends Payload {
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 */
	language: string | nothing;
	/**
	 * Your local {@link Timezone} used to calculate times.
	 * @see {@link Timezone.code}
	 */
	timezone: Timezone | nothing;
	/**
	 * List of {@link UserNotifications} preferences.
	 * Please note that active times cannot overlap.
	 */
	notify: UserNotifications[] | nothing;
	/**
	 * Formatting help for dates, times, numbers.
	 */
	formats: Map<string, string | nothing> | nothing;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 */
	measurements: Map<string, SystemsOfUnits | nothing> | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.language = json?.language as codified;
		this.timezone = utility.findTimeZoneById(json?.timezone as codified);
		this.notify = (json?.notify as JsonObject[])?.map((n: any) => new UserNotifications(n));
		this.formats = json?.formats ? new Map(Object.entries(json?.formats)) : null;
		this.measurements = json?.measurements ? new Map(Object.entries(json?.measurements)) : null;
	}

	override getAction(): {
		kind: "Merge",
		object: SyncName,
		filter: "Preferences",
		batch: false,
	} {
		return {
			kind: "Merge",
			object: "Self" as SyncName,
			filter: "Preferences",
			batch: false,
		};
	}

	override createReply(json: JsonObject): Reply {
		return new Reply(json);
	}

	override toJSON(): JsonObject {
		const json: JsonObject = super.toJSON();
		if (this.language) json.language = this.language;
		if (this.timezone) json.timezone = this.timezone.code;
		if (this.notify) json.notify = this.notify.map((n) => n.toJSON());
		if (this.formats?.size) json.formats = serialization.fromMap(this.formats);
		if (this.measurements?.size) json.measurements = serialization.fromMap(this.measurements);
		return json;
	}
}