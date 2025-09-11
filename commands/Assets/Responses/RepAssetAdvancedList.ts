import { AssetAdvanced, nothing, serialization, utility } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentId } from "commands/API/Responses/Content/ContentId";

/**
 * A container for the requested {@link assetAdvanceds}.
 **/
export abstract class RepAssetAdvancedList extends Reply {
	/**
	 * The list of requested {@link AssetAdvanced}s.
	 **/
	assetAdvanceds: AssetAdvanced[] | nothing;

	constructor(json?: any) {
		super(json);
		this.assetAdvanceds = json?.assetAdvanceds?.map((el: any) => new AssetAdvanced(el));
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetAdvancedListByCompany extends RepAssetAdvancedList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json?: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetAdvancedListByCompanyAndLabels extends RepAssetAdvancedListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: string[] | nothing;

	constructor(json?: any) {
		super(json);
		this.labels = json?.labels;
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetAdvancedListByCompanyAndRefPairs extends RepAssetAdvancedListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link AssetGeneral.references}
	 **/
	references: Map<string, string> | nothing;

	constructor(json?: any) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json.references);
		}
	}
}