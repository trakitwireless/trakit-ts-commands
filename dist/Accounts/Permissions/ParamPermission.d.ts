import { ISerializable } from "@trakit/objects";
import { codified, JsonObject, nothing, PermissionLevel, PermissionMethod, PermissionType, ulong } from "@trakit/objects";
/**
 * Similar to the {@link Permission} object, but the {@link company}, {@link level}, {@link method}, and {@link labels} are all optional.
 * <category>Users and Map</category>
 */
export declare class ParamPermission implements ISerializable {
    /**
     * The {@link Company} that this permission targets.
     * If not given, will default to the {@link UserAdvanced.company}, {@link UserGroup.company} or {@link Machine.company} to which it belongs.
     * @see {@link Company.id}
     */
    company: ulong | nothing;
    /**
     * The kind of {@link PermissionType}.
     * <override required="always" />
     */
    kind: PermissionType | nothing;
    /**
     * The level of access being defined.
     * <override value="read"/>
     */
    level: PermissionLevel | nothing;
    /**
     * The way the access is used.
     * <override value="grant"/>
     */
    method: PermissionMethod | nothing;
    /**
     * Codified names of {@link CompanyLabels.labels}.  If list is empty, this permission applies for all labels.
     * <override>
     * <values format="codified">
     * @see {@link LabelStyle.code}
     * </values>
     * </override>
     */
    labels: codified[] | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamPermission.d.ts.map