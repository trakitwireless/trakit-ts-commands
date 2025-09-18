import { nothing, ProviderType, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link Provider}.
 **/
export class ParamProviderMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link Provider} you want to update.
	 * Leave this as `null` when creating a new {@link Provider}.
	 **/
	id: string | nothing;
	/**
	 * The {@link Company} to which this {@link Provider} belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | nothing;
	/**
	 * Name for the {@link Provider}.
	 **/
	name: string | nothing;
	/**
	 * Notes for the {@link Provider}.
	 **/
	notes: string | nothing;
	/// <summary>
	/// The type of <see cref="Provider"/>.
	/// </summary>
	kind: ProviderType | nothing;
	/// <summary>
	/// A reference to the <see cref="Asset"/> with which to provide events.
	/// </summary>
	asset: ulong | nothing;
	/// <summary>
	/// Identifier of the <see cref="ProviderConfig"/>/<see cref="ProviderConfiguration"/> this <see cref="Provider"/> will use.
	/// </summary>
	config: ulong | nothing;
	/// <summary>
	/// The phone number this <see cref="Provider"/> uses (if known).
	/// </summary>
	phone: ulong | nothing;
	/// <summary>
	/// The password required to communicate and program this <see cref="Provider"/>.
	/// </summary>
	password: string | nothing;
	
	constructor(json: any) {
		super(json);
		this.id = json?.id;
		this.company = json?.company;
		this.name = json?.name;
		this.notes = json?.notes;
		this.kind = json?.kind;
		this.asset = json?.asset;
		this.config = json?.config;
		this.phone = json?.phone;
		this.password = json?.password;
	}

	override toJSON(): any {
		const json: any = {
			id: this.id,
		};
		if (this.v?.length) {
			json.v = [...this.v];
		} else {
			json.company = this.company;
			json.kind = this.kind;
		}
		if (this.asset) json.asset = this.asset;
		if (this.config) json.config = this.config;
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.phone) json.phone = this.phone;
		if (this.password) json.password = this.password;
		return json;
	}
}