import { double, FormFieldNumericSize, FormFieldType, JsonObject, long, nothing, serialization, TimeSpan, ulong, utility } from "@trakit/objects";
import { ParamMerge } from "../../../../API/Requests/Parameters/ParamMerge";

/**
 * Parameters used to create or update an {@link FormTemplate}.
 */
export class ParamFormField extends ParamMerge {
	/**
	 * The identifier of the field.
	 * Identifiers are unique to a {@link FormTemplate}, but are not unique system-wide.
	 */
	id: ulong | nothing;
	/**
	 * The name for the field.
	 */
	name: string | nothing;
	/**
	 * The type of interface control that should be presented to the user.
	 */
	kind: FormFieldType | nothing;
	/**
	 * Notes or special instructions for this control.
	 */
	notes: string | nothing;
	/**
	 * When true, a valid value must be given for this field.
	 */
	required: boolean | nothing;
	/**
	 * The default value for the field in the template.
	 */
	value: string | nothing;
	/**
	 * When false, this field's value is treated as read-only.
	 */
	editable: boolean | nothing;

	/**
	 * A {@link FormFieldNumeric.size} context hint for {@link FormFieldNumeric} fields.
	 */
	size: FormFieldNumericSize | nothing;
	/**
	 * The {@link FormFieldNumeric.precision} used for {@link FormFieldNumeric} fields.
	 */
	precision: long | nothing;
	/**
	 * The {@link FormFieldNumeric.step} used for {@link FormFieldNumeric} fields.
	 */
	step: double | nothing;
	/**
	 * The {@link FormFieldNumeric.units} used for {@link FormFieldNumeric} fields.
	 */
	units: string | nothing;

	/**
	 * Will be a {@link FormFieldChoice.choices} dictionary of strings for choice/drop-down fields,
	 * or will be a {@link FormFieldBoolean.choices} array of strings for checkbox/toggle-switch fields.
	 */
	choices: string[] | Map<string, string | nothing> | nothing;

	/**
	 * The {@link FormFieldText.rows} used for {@link FormFieldText} fields.
	 */
	rows: long | nothing;

	/**
	 * Will be a <format id="int64" /> or <format id="double" /> representing the minimum number or {@link FormFieldAttachments} attachments, {@link FormFieldChoice} choices, or shortest {@link FormFieldText} text length,
	 * or will be a <format id="datetime"/> representing the earliest possible {@link FormFieldDate} date and/or time,
	 * or will be a <format id="datetime"/> representing the earliest possible {@link FormFieldTime} time or smallest duration.
	 * Note that dates and times should not be sent assuming it will be converted to UTC, and form fields do not enforce a timezone.
	 */
	minimum: long | double | Date | TimeSpan | nothing;
	/**
	 * Will be a <format id="int64" /> or <format id="double" /> representing the maximum number or {@link FormFieldAttachments} attachments, {@link FormFieldChoice} choices, or longest {@link FormFieldText} text length,
	 * or will be a <format id="datetime"/> representing the latest possible {@link FormFieldDate} date and/or time,
	 * or will be a <format id="datetime"/> representing the latest possible {@link FormFieldTime} time or largest duration.
	 * Note that dates and times should not be sent assuming it will be converted to UTC, and form fields do not enforce a timezone.
	 */
	maximum: long | double | Date | TimeSpan | nothing;

	constructor(json?: JsonObject) {
		super();
		this.id = json?.id as ulong;
		this.name = json?.name as string;
		this.kind = json?.kind as FormFieldType;
		this.notes = json?.notes as string;
		this.required = json?.required as boolean;
		this.value = json?.value as string;
		this.editable = json?.editable as boolean;
		this.size = json?.size as FormFieldNumericSize;
		this.precision = json?.precision as long;
		this.step = json?.step as double;
		this.units = json?.units as string;
		if(Array.isArray(json?.choices)) {
			this.choices = json?.choices as string[];
		} else if (json?.choices) {
			this.choices = serialization.toMap(json?.choices as object);
		}
		this.rows = json?.rows as long;
		if (typeof json?.minimum === "string") {
			this.minimum = utility.date(json.minimum);
			if (isNaN(this.minimum.valueOf())) this.minimum = new TimeSpan(json.minimum);
		} else if (typeof json?.minimum === "number") {
			this.minimum = json.minimum as long | double;
		}
		if (typeof json?.maximum === "string") {
			this.maximum = utility.date(json.maximum);
			if (isNaN(this.maximum.valueOf())) this.maximum = new TimeSpan(json.maximum);
		} else if (typeof json?.maximum === "number") {
			this.maximum = json.maximum as long | double;
		}
	}

	override toJSON(): any {
		const json: any = {};
		if (this.id) json.id = this.id;
		if (this.name) json.name = this.name;
		if (this.kind) json.kind = this.kind;
		if (this.notes) json.notes = this.notes;
		if (!utility.isNothing(this.required)) json.required = this.required;
		if (this.value) json.value = this.value;
		if (!utility.isNothing(this.editable)) json.editable = this.editable;
		if (this.size) json.size = this.size;
		if (utility.isntNaN(this.precision)) json.precision = this.precision;
		if (utility.isntNaN(this.step)) json.step = this.step;
		if (this.units) json.units = this.units;
		if ((this.choices as Map<string, string>)?.size) {
			json.choices = serialization.fromMap(this.choices as Map<string, string>);
		} else if ((this.choices as string[])?.length) {
			json.choices = [...this.choices as string[]];
		}
		if (utility.isntNaN(this.rows)) json.rows = this.rows;
		if (utility.isntNaN(this.minimum?.valueOf())) {
			json.minimum = this.minimum
				?? (this.minimum as Date).toISOString?.()
				?? (this.minimum as TimeSpan).toString();
		}
		if (utility.isntNaN(this.maximum?.valueOf())) {
			json.maximum = this.maximum
				?? (this.maximum as Date).toISOString?.()
				?? (this.maximum as TimeSpan).toString();
		}
		return json;
	}
}