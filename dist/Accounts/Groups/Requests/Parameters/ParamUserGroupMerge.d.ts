import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamPermission } from "../../../Permissions/ParamPermission";
/**
 * Parameters used to create or update an {@link UserGroup}.
 */
export declare class ParamUserGroupMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link UserGroup} you want to update.
     */
    id: ulong | nothing;
    /**
     * The company to which this {@link UserGroup} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | nothing;
    /**
     * Name for the {@link UserGroup}.
     */
    name: string | nothing;
    /**
     * Notes for the {@link UserGroup}.
     */
    notes: string | nothing;
    /**
     * List of permissions assigned to members of this {@link UserGroup}.
     */
    permissions: ParamPermission[] | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamUserGroupMerge.d.ts.map