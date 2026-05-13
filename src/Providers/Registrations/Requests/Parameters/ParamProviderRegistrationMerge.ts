import { JsonObject, phone, timespan } from "@trakit/objects";
import { nothing, TimeSpan, ulong, utility } from "@trakit/objects";
import { ParamMerge } from "../../../../API/Requests/Parameters/ParamMerge";

/**
 * Parameters used to create or update an {@link ProviderRegistration}.
 */
export class ParamProviderRegistrationMerge extends ParamMerge {
	/// <summary>
	/// The identifier of the <see cref="ProviderConfig"/>/<see cref="ProviderConfiguration"/> that will be loaded onto the new <see cref="Provider"/>.
	/// </summary>
	config: ulong | nothing;
	/// <summary>
	/// An optional <see cref="Asset"/> to which the new <see cref="Provider"/> will be assigned.
	/// </summary>
	asset: ulong | nothing;
	/// <summary>
	/// Identifier of the <see cref="Provider"/> to setup.
	/// This is helpful for long-term deployments, but will be overwritten during provisioning.
	/// </summary>
	/// <seealso cref="Provider.id" />
	identifier: string | nothing;
	/// <summary>
	/// If known beforehand, a phone number can be specified for new <see cref="Provider"/>s.
	/// </summary>
	phone: ulong | nothing;
	/// <summary>
	/// The lifetime of the <see cref="ProviderRegistration"/>.
	/// The default value (if not specified) is 10 minutes.
	/// It can be specified as up to 2 months to allow for longer deployments.
	/// </summary>
	lifetime: TimeSpan | nothing;
	/// <summary>
	/// A nickname given to the <see cref="Provider"/> once it has been provisioned.
	/// </summary>
	name: string | nothing;
	/// <summary>
	/// Notes about the <see cref="Provider"/> for after it's been programmed.
	/// </summary>
	notes: string | nothing;
	/// <summary>
	/// The password programmed on the <see cref="Provider"/> used to ensure the system is the only client authorized to make changes.
	/// </summary>
	password: string | nothing;

	constructor(json?: JsonObject) {
		super();
		this.config = json?.config as ulong;
		this.asset = json?.asset as ulong;
		this.identifier = json?.identifier as string;
		this.phone = json?.phone as phone;
		this.lifetime = json?.lifetime
			? new TimeSpan(json.lifetime as timespan)
			: null;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.password = json?.password as string;
	}

	override toJSON(): JsonObject {
		const json: JsonObject = {};
		if (this.config) json.config = this.config;
		if (!utility.isNothing(this.asset)) json.asset = this.asset;
		if (!utility.isNothing(this.identifier)) json.identifier = this.identifier;
		if (this.phone) json.phone = this.phone;
		if (this.lifetime) json.lifetime = this.lifetime.toString();
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.password) json.password = this.password;
		return json;
	}
}