import { JsonObject } from "@trakit/objects";
import { nothing, TimeSpan, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { MaintenanceJobStatus } from "@trakit/objects";
import { double } from "@trakit/objects";
/**
 * Parameters used to create or update an {@link MaintenanceJob}.
 */
export declare class ParamMaintenanceJobMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link MaintenanceJob} you want to update.
     * Leave this as `null` when creating a new {@link MaintenanceJob}.
     */
    id: ulong | undefined;
    asset: ulong | nothing;
    schedule: ulong | nothing;
    name: string | nothing;
    notes: string | nothing;
    status: MaintenanceJobStatus | nothing;
    created: Date | nothing;
    completed: Date | nothing;
    odometer: double | nothing;
    engineHours: double | nothing;
    garage: string | nothing;
    duration: TimeSpan | nothing;
    cost: double | nothing;
    reference: string | nothing;
    technician: string | nothing;
    pictures: ulong[] | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamMaintenanceJobMerge.d.ts.map