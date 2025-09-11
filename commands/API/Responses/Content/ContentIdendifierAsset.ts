import { nothing, ulong } from "@trakit/objects";
import { ContentIdendifierCompany } from "./ContentIdendifierCompany";

/**
 * A container for the id, {@link Asset} id, and owning {@link Company.id} of the {@link Provider} requested/created.
 **/
export class ContentIdendifierAsset extends ContentIdendifierCompany {
	/**
	 * Creates a {@link ContentIdendifierAsset} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdendifierAsset} from.
	 * @returns A {@link ContentIdendifierAsset} instance or nothing.
	 */
	static override fromJSON(json: any): ContentIdendifierAsset | nothing {
		return json
			? new ContentIdendifierAsset(json)
			: null;
	}

	/**
	 * Identifier of the {@link Asset} to which this object belongs.
	 * <remarks>
	 * This value must remain nullable because Providers can have a null value for their asset member.
	 * </remarks>
	 **/
	asset: ulong | nothing;

	constructor(json: any) {
		super(json);
		this.asset = json?.asset;
	}
}