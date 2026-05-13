import { double, email, JsonObject, MaintenanceInterval, nothing, TimeSpan, uint, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link MaintenanceSchedule}.
 */
export declare class ParamMaintenanceScheduleMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link MaintenanceSchedule} you want to update.
     * Leave this as `null` when creating a new {@link MaintenanceSchedule}.
     */
    id: ulong | undefined;
    /**
     * The {@link Company} to which this {@link MaintenanceSchedule} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | undefined;
    /**
     * Name for the {@link MaintenanceSchedule}.
     */
    name: string;
    /**
     * Notes for the {@link MaintenanceSchedule}.
     */
    notes: string;
    targets: string | nothing;
    notify: email[] | nothing;
    fill: string | nothing;
    stroke: string | nothing;
    graphic: string | nothing;
    predictionDays: uint | nothing;
    recurDays: uint | nothing;
    recurDistance: double | nothing;
    recurEngineHours: double | nothing;
    intervals: Map<ulong, MaintenanceInterval | nothing> | nothing;
    garage: string | nothing;
    duration: TimeSpan | nothing;
    cost: double | nothing;
    reference: string | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamMaintenanceScheduleMerge.d.ts.map