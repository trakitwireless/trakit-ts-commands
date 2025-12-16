import { AssetAttribute, AssetType, codified, double, email, JsonObject, nothing, serialization, ulong, ushort, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link Asset}.
 */
export class ParamAssetMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link Asset} you want to update.
	 * <override required="update" />
	 */
	id: ulong | nothing;
	/**
	 * The identifier of the {@link Company} to which this {@link Asset} belongs.
	 * After creation, this value is read-only.
	 * <override required="create" />
	 */
	company: ulong | nothing;
	/**
	 * The kind of {@link Asset} being created.
	 * After creation, this value is read-only.
	 * <override required="create" />
	 */
	kind: AssetType | nothing;
	/**
	 * Name for the {@link Asset}.
	 * <override required="create" max-length="100" />
	 */
	name: string | nothing;
	/**
	 * Notes for the {@link Asset}.
	 */
	notes: string | nothing;
	/**
	 * The identifier of the {@link Icon} used to represent this {@link Asset} in the UI.
	 * <override required="create" />
	 * @see {@link Icon.id}
	 */
	icon: ulong | nothing;
	/**
	 * A list of <format id="codified"/>&amp;nbsp;{@link CompanyStyles.labels|label} names to categorize/organize this {@link Asset}.
	 * <override>
	 * <values format="codified">
	 * @see {@link LabelStyle.code}
	 * </values>
	 * </override>
	 */
	labels: codified[] | nothing;
	/**
	 * Replaces the {@link Asset}'s status tags with the given list of <format id="codified"/> tags.
	 */
	tags: string[] | nothing;
	/**
	 * Allows you to add, remove, and replace attributes.
	 * For each {@link AssetAttribute} in the attributes object,
	 * the value will be replaced on the {@link Asset}.
	 * If value is null, the attribute is removed from the {@link Asset}.
	 * If the key in the attributes object is different from the <format id="codified"/>({@link AssetAttribute.name})
	 * in the object, the attribute of the key is removed from the {@link Asset}, and one of the codified name is added to the {@link Asset}.
	 * If a new value or null is not provided for a current attribute, no change is made.
	 */
	attributes: Map<string, AssetAttribute | nothing> | nothing;
	/**
	 * The email address or phone number of this {@link Asset} when a {@link Person}'s {@link Contact} card is blank, or the {@link Provider}'s {@link ProviderGeneral.pnd|PND} is not installed.
	 */
	messagingAddress: string | nothing;
	/**
	 * The identifiers of {@link Picture}s of this {@link Asset}.
	 * <override>
	 * <values>
	 * @see {@link Picture.id}
	 * </values>
	 * </override>
	 */
	pictures: ulong[] | nothing;
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 * If the value is null, the references are removed from the {@link Asset}.
	 */
	references: Map<string, string | nothing> | nothing;
	/**
	 * The contact card details for this {@link Asset}.
	 * Only applicable if `asset.kind` is {@link AssetType.person}.
	 * <override required="create (for person)" />
	 */
	contact: ulong | nothing;
	/**
	 * The year this {@link Vehicle} or {@link Trailer} was built.
	 * Only applicable if `asset.kind` is {@link AssetType.vehicle} or {@link AssetType.trailer}.
	 */
	year: ushort | nothing;
	/**
	 * The license plate of this {@link Vehicle} or {@link Trailer}.
	 * Only applicable if `asset.kind` is {@link AssetType.vehicle} or {@link AssetType.trailer}.
	 */
	plate: string | nothing;
	/**
	 * The manufacturer of this {@link Vehicle} or {@link Trailer}.
	 * Only applicable if `asset.kind` is {@link AssetType.vehicle} or {@link AssetType.trailer}.
	 */
	make: string | nothing;
	/**
	 * The model of this {@link Vehicle} or {@link Trailer}.
	 * Only applicable if `asset.kind` is {@link AssetType.vehicle} or {@link AssetType.trailer}.
	 */
	model: string | nothing;
	/**
	 * The pretty-pretty colour of this {@link Vehicle} or {@link Trailer}.
	 * Only applicable if `asset.kind` is {@link AssetType.vehicle} or {@link AssetType.trailer}.
	 * <override max-length="22" format="colour" />
	 */
	colour: string | nothing;
	/**
	 * The manufacturer's identification number of this {@link Trailer}.
	 * Only applicable if `asset.kind` is {@link AssetType.vehicle}.
	 */
	serial: string | nothing;
	/**
	 * The Vehicle Identification Number of this {@link Vehicle}.
	 * Only applicable if `asset.kind` is {@link AssetType.trailer}.
	 */
	vin: string | nothing;
	/**
	 * The distance travelled by this {@link Asset}.
	 * Can be a GPS odometer, OBD-II odometer, or other depending on scripts.
	 */
	odometer: double | nothing;
	/**
	 * The number of hours the engine has been running for this {@link Vehicle}.
	 * Only applicable if `asset.kind` is {@link AssetType.vehicle}.
	 */
	engineHours: double | nothing;
	/**
	 * A list of related asset identifiers like a driver for a {@link Vehicle}, or {@link Trailer} for a truck.
	 * <override>
	 * <values>
	 * @see {@link Asset.id}
	 * </values>
	 * </override>
	 */
	relationships: ulong[] | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.company = json?.company as ulong;
		this.kind = json?.kind as AssetType;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.icon = json?.icon as ulong;
		this.labels = json?.labels as codified[];
		this.tags = json?.tags as codified[];
		this.attributes = json?.attributes
			? serialization.toMapPredicate(json.attributes as object, (k, v) => [k, AssetAttribute.fromJSON(v)])
			: null;
		this.messagingAddress = json?.messagingAddress as email;
		this.pictures = json?.pictures as ulong[];
		this.references = json?.references
			? serialization.toMap(json?.references as object)
			: null;
		this.contact = json?.contact as ulong;
		this.year = json?.year as ushort;
		this.plate = json?.plate as string;
		this.make = json?.make as string;
		this.model = json?.model as string;
		this.colour = json?.colour as string;
		this.serial = json?.serial as string;
		this.vin = json?.vin as string;
		this.odometer = json?.odometer as double;
		this.engineHours = json?.engineHours as double;
		this.relationships = json?.relationships as ulong[];
	}

	override toJSON(): any {
		const json: any = {};
		if (this.id) {
			json.id = this.id;
			json["v"] = [...this.v];
		} else {
			json["company"] = this.company;
			json.kind = this.kind;
		}
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (utility.isntNaN(this.icon)) json.icon = this.icon;
		if (this.labels?.length) json.labels = [...this.labels];
		if (this.tags?.length) json.tags = [...this.tags];
		if (this.attributes?.size) json.attributes = serialization.fromMapPredicate(this.attributes, (k, v) => [k, v?.toJSON()]);
		if (this.messagingAddress) json.messagingAddress = this.messagingAddress;
		if (this.pictures?.length) json.pictures = [...this.pictures];
		if (this.references?.size) json.references = serialization.fromMap(this.references);
		if (utility.isntNaN(this.contact)) json.contact = this.contact;
		if (utility.isntNaN(this.year)) json.year = this.year;
		if (this.plate) json.plate = this.plate;
		if (this.make) json.make = this.make;
		if (this.model) json.model = this.model;
		if (this.colour) json.colour = this.colour;
		if (this.serial) json.serial = this.serial;
		if (this.vin) json.vin = this.vin;
		if (utility.isntNaN(this.odometer)) json.odometer = this.odometer;
		if (utility.isntNaN(this.engineHours)) json.engineHours = this.engineHours;
		if (this.relationships?.length) json.relationships = [...this.relationships];
		return json;
	}
}