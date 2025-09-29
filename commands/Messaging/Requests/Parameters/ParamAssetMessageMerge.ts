import { MessageFolder, MessageType, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link AssetMessage}.
 **/
export class ParamAssetMessageMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link AssetMessage} you want to update.
	 * Leave this as `null` when creating a new {@link AssetMessage}.
	 **/
	id: ulong | nothing;
	/// <summary>
	/// The <see cref="Asset"/> that this <see cref="Message"/> was sent from or to.
	/// After creation, this value is read-only.
	/// </summary>
	asset: ulong | nothing;
	/// <summary>
	/// The kind of protocol used for this <see cref="Message"/>.
	/// After creation, this value is read-only.
	/// </summary>
	kind: MessageType | nothing;
	/// <summary>
	/// The folder where this <see cref="Message"/> is stored.
	/// </summary>
	folder: MessageFolder | nothing;
	/// <summary>
	/// Optional to address used when creating the <see cref="Message"/> if no messaging address is available.
	/// After creation, this value is read-only.
	/// </summary>
	to: string | nothing;
	/// <summary>
	/// The <see cref="Message"/> subject field.
	/// After creation, this value is read-only.
	/// This is used exclusively with <see cref="MemoType.email"/> type <see cref="Message"/>s.
	/// </summary>
	subject: string | nothing;
	/// <summary>
	/// The body of the <see cref="Message"/>.
	/// After creation, this value is read-only.
	/// </summary>
	body: string | nothing;
	/// <summary>
	/// Set to true to log that the <see cref="Message"/> was received and read by yourself.
	/// Once set, the <see cref="Message.readBy"/> value will be your login, and cannot be set by anyone else.
	/// </summary>
	read: boolean | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id;
		this.asset = json?.asset;
		this.kind = json?.kind;
		this.folder = json?.folder;
		this.to = json?.to;
		this.subject = json?.subject;
		this.body = json?.body;
		this.read = json?.read;
	}

	override toJSON(): any {
		const json: JsonObject = {};
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.asset = this.asset;
		}
		if (this.kind) json.kind = this.kind;
		if (this.folder) json.folder = this.folder;
		if (this.to) json.to = this.to;
		if (this.subject) json.subject = this.subject;
		if (this.body) json.body = this.body;
		if (this.read) json.read = this.read;
		return json;
	}
}