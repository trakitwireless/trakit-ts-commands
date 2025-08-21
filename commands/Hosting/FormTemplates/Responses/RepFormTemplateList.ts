import { Reply } from "../../../API/Responses/Reply";
import { RepFormTemplateList } from "./RepFormTemplateList";

/**
 * A container for the requested <see cref="formTemplates"/>.

 **/
export abstract class RepFormTemplateList extends Reply {
	/**
	 * The list of requested <see cref="FormTemplate"/>s.

	 **/
	formTemplates: FormTemplate[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.

 **/
export class RepFormTemplateListByCompany extends RepFormTemplateList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.

	 **/
	company: ContentId;}