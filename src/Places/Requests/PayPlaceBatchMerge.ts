import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { RepPlaceBatchMerge } from "../Responses/RepPlaceBatchMerge";
import { ParamPlaceMerge } from "./Parameters/ParamPlaceMerge";

/**
 * 
 */
export class PayPlaceBatchMerge extends Payload {
	/**
	 * 
	 */
	places: ParamPlaceMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.places = (json?.places as JsonObject[])?.map((item: any) => new ParamPlaceMerge(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepPlaceBatchMerge(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			places: this.places.map(p => p.toJSON()),
		};
	}
}