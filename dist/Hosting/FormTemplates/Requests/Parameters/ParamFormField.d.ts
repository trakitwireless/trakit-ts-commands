import { double, FormFieldNumericSize, FormFieldType, JsonObject, long, nothing, TimeSpan, ulong } from "@trakit/objects";
import { ParamMerge } from "../../../../API/Requests/Parameters/ParamMerge";
/**
 * Parameters used to create or update an {@link FormTemplate}.
 */
export declare class ParamFormField extends ParamMerge {
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
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamFormField.d.ts.map