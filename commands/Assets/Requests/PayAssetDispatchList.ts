import { codified, JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetDispatchListByCompany, RepAssetDispatchListByCompanyAndLabels, RepAssetDispatchListByCompanyAndRefPairs } from "../Responses/RepAssetDispatchList";

/**
 * Gets a list of {@link AssetDispatch}s.
 */
export abstract class PayAssetDispatchList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link AssetDispatch} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}

/**
 * Gets the list of {@link AssetDispatch}s for the specified {@link Company}.
 */
export class PayAssetDispatchListByCompany extends PayAssetDispatchList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetDispatchListByCompany(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			company: this.company.toJSON(),
		};
	}
}

/**
 * Gets the list of {@link AssetDispatch}s for the specified {@link Company} only if the {@link AssetDispatchGeneral.labels} matches all of the given {@link Parameters.labels}.
 */
export class PayAssetDispatchListByCompanyAndLabels extends PayAssetDispatchListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link AssetGeneral.labels}
	 */
	labels: codified[];

	constructor(json?: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[] ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetDispatchListByCompanyAndLabels(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			labels: [...this.labels],
		};
	}
}

/**
 * Gets the list of {@link AssetDispatch}s for the specified {@link Company} only if one of the specified {@link AssetDispatchGeneral.references} fields match.
 * If no references are specified, it will match any {@link AssetDispatch} with no references.
 * If a reference value is null, it will match any {@link AssetDispatch} without that reference key.
 */
export class PayAssetDispatchListByCompanyAndRefPairs extends PayAssetDispatchListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link AssetDispatchGeneral.references}
	 */
	references: Map<string, string>;

	constructor(json?: JsonObject) {
		super(json);
		this.references = new Map(Object.entries(json?.references ?? {}));
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetDispatchListByCompanyAndRefPairs(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			references: Object.fromEntries(this.references),
		};
	}
}