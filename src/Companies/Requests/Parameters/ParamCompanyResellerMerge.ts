import { ColourStyle, JsonObject, nothing, serialization, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamEmailServer } from "./ParamEmailServer";
import { ParamSmsServer } from "./ParamSmsServer";

/**
 * Parameters used to create or update an {@link Company}.
 */
export class ParamCompanyResellerMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the company you want to update.
	 */
	id: ulong;
	/**
	 * The name of the branded service being provided to the seller's customers.
	 */
	serviceName: string | nothing;
	/**
	 * A list of Contacts for company specific things like Technical Support, Billing, etc...
	 */
	contactInfo: Map<string, ulong | nothing> | nothing;

	/**
	 * The name of the image uploaded as the logo (used for regular view).
	 */
	logo: string | nothing;
	/**
	 * The name of the image uploaded as the logo (used for collapsed/mobile view).
	 */
	icon: string | nothing;
	/**
	 * The name of the icon file used for browser bookmarks.
	 */
	favourite: string | nothing;
	/**
	 * The URN and path to the instance of v4.
	 * It does not contain the protocol because all instances are required to be HTTPS.
	 */
	domain: string | nothing;

	/**
	 * The list of supported languages for your customers.
	 */
	languages: string[] | nothing;
	/**
	 * Themed colours used in the web-based UI.
	 */
	website: Map<string, string | nothing> | nothing;
	/**
	 * A list of symbol names and their corresponding FontAwesome icon names.
	 */
	graphics: Map<string, string | nothing> | nothing;
	/**
	 * Colours used as templates for status tags, labels, and places.
	 */
	gamut: Map<string, ColourStyle | nothing> | nothing;

	/**
	 * Settings for sending and receiving email notifcations and asset messages.
	 */
	notifyEmail: ParamEmailServer | nothing;
	/**
	 * Settings for sending and receiving SMS notifcations and asset messages.
	 */
	notifySms: ParamSmsServer | nothing;

	/**
	 * A small body of text added as a preamble for the Trak-iT Wireless Inc. terms of service.
	 */
	termsPreamble: string | nothing;
	/**
	 * A timestamp from when the preamble was changed.
	 */
	termsUpdated: Date | nothing;

	/**
	 * The subject of the email sent to a user requesting a password reset.
	 */
	recoverSubject: string | nothing;
	/**
	 * The body of the email sent to a user requesting a password reset.
	 */
	recoverBody: string | nothing;
	/**
	 * When true, sends the password reset email as an HTML email instead of plain text.
	 */
	recoverIsHtml: boolean | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.serviceName = json?.serviceName as string;
		this.contactInfo = json?.contactInfo
			? serialization.toMapPredicate(json.contactInfo as object, (key, value) => [key, utility.id(value) || null])
			: new Map;
		this.logo = json?.logo as string;
		this.icon = json?.icon as string;
		this.favourite = json?.favourite as string;
		this.domain = json?.domain as string;
		this.languages = json?.languages as string[];
		this.website = serialization.toMap(json?.website as object);
		this.graphics = serialization.toMap(json?.graphics as object);
		this.gamut = json?.gamut
			? serialization.toMapPredicate(json.gamut as object, (key, value) => [key, ColourStyle.fromJSON(value)])
			: new Map;
		this.notifyEmail = json?.notifyEmail
			? new ParamEmailServer(json.notifyEmail as JsonObject)
			: null;
		this.notifySms = json?.notifySms
			? new ParamSmsServer(json.notifySms as JsonObject)
			: null;
		this.termsPreamble = json?.termsPreamble as string;
		this.termsUpdated = json?.termsUpdated
			? utility.date(json.termsUpdated as string)
			: null;
		this.recoverSubject = json?.recoverSubject as string;
		this.recoverBody = json?.recoverBody as string;
		this.recoverIsHtml = json?.recoverIsHtml as boolean;
	}

	override toJSON(): JsonObject {
		const json: JsonObject = {
			id: this.id,
			v: [...this.v],
		};
		if (this.serviceName) json.serviceName = this.serviceName;
		if (this.contactInfo) json.contactInfo = serialization.fromMap(this.contactInfo);
		if (this.logo) json.logo = this.logo;
		if (this.icon) json.icon = this.icon;
		if (this.favourite) json.favourite = this.favourite;
		if (this.domain) json.domain = this.domain;
		if (this.languages) json.languages = [...this.languages];
		if (this.website?.size) json.website = serialization.fromMap(this.website);
		if (this.graphics?.size) json.graphics = serialization.fromMap(this.graphics);
		if (this.gamut?.size) json.gamut = serialization.fromMapPredicate(this.gamut, (key, value) => [key, value?.toJSON() || null]);
		if (this.notifyEmail) json.notifyEmail = this.notifyEmail.toJSON();
		if (this.notifySms) json.notifySms = this.notifySms.toJSON();
		if (this.termsPreamble) json.termsPreamble = this.termsPreamble;
		if (!isNaN(this.termsUpdated?.valueOf() as number)) json.termsUpdated = (this.termsUpdated as Date).toISOString();
		if (this.recoverSubject?.trim()) json.recoverSubject = this.recoverSubject;
		if (this.recoverBody?.trim()) json.recoverBody = this.recoverBody;
		if (typeof this.recoverIsHtml === "boolean") json.recoverIsHtml = this.recoverIsHtml;
		return json;
	}
}