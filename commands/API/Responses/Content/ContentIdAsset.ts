import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";

/**
 * A container for the id, owning {@link Asset.id}, and owning {@link Company.id} of the object requested/created.
 */
export class ContentIdAsset extends ContentIdCompany {
	/**
	 * Creates a {@link ContentIdAsset} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdAsset} from.
	 * @returns A {@link ContentIdAsset} instance or nothing.
	 */
	static override fromJSON(json: JsonObject): ContentIdAsset | nothing {
		return json
			? new ContentIdAsset(json)
			: null;
	}

	/**
	 * Identifier of the {@link Asset} to which this object belongs
	 */
	asset: ulong | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = json?.asset as ulong;
	}
	override toJSON() {
		return {
			...super.toJSON(),
			asset: this.asset ?? null,
		};
	}
}