import { email, guid, JsonObject, Machine, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link machines}.
 **/
export abstract class RepMachineList extends ReplySyncList<Machine> {
	/**
	 * The list of requested {@link Machine}s.
	 **/
	machines: Machine[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Machine");
		this.machines = (json?.machines as JsonObject[])?.map((m: any) => new Machine(m));
	}
	override getCollection() { return this.machines as Machine[]; }
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepMachineListByCompany extends RepMachineList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [string | guid | email | ulong, Machine], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
}