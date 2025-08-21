import { Reply } from "../../../API/Responses/Reply";
import { RepFormTemplateList } from "./RepFormTemplateList";

/**
 * A container for the requested {@link formTemplates}.

 **/
export abstract class RepFormTemplateList extends Reply {
	/**
	 * The list of requested {@link FormTemplate}s.

	 **/
	formTemplates: FormTemplate[];
	}

/**
 * Contains the {@link Company.id} of the collection.

 **/
export class RepFormTemplateListByCompany extends RepFormTemplateList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.

	 **/
	company: ContentId;}