import { nothing, SystemsOfUnits, Timezone, UserNotifications, utility } from "@trakit/objects";
import { Payload } from "commands/API/Requests/Payload";

/**
 * Allows a session {@link User} to change their own preferences.
 **/
export class PaySelfPreferences extends Payload {
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 **/
	language: string | nothing;
	/**
	 * Your local {@link Timezone} used to calculate times.
	 * @see {@link Timezone.code}
	 **/
	timezone: Timezone | nothing;
	/**
	 * List of {@link UserNotifications} preferences.
	 * Please note that active times cannot overlap.
	 **/
	notify: UserNotifications[] | nothing;
	/**
	 * Formatting help for dates, times, numbers.
	 **/
	formats: Map<string, string | nothing> | nothing;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 **/
	measurements: Map<string, SystemsOfUnits | nothing> | nothing;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 * If a value of null is given, the option is removed.  To keep the option, you can use a blank string.
	 * For convenience, if the value of an option is given as JSON (instead of a string), they are automatically serialized with no white-space.
	 **/
	options: Map<string, string | nothing> | nothing;
	
	constructor(json: any) {
		super(json);
		this.language = json?.language;
		this.timezone = utility.findTimeZoneById(json?.timezone);
		this.notify = json?.notify?.map((n: any) => new UserNotifications(n));
		this.formats = json?.formats ? new Map(Object.entries(json?.formats)) : null;
		this.measurements = json?.measurements ? new Map(Object.entries(json?.measurements)) : null;
		this.options = json?.options ? new Map(Object.entries(json?.options)) : null;
	}
}