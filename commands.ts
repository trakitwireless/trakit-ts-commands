/**
 * Object definitions that work with our various APIs.
 * {@link https://github.com/trakitwireless/trakit-ts-commands|TypeScript documentation.}
 * Last updated on Thu Feb 27 2025 11:59:01 
 * @copyright Trak-iT Wireless Inc. 2025
 */
import { TrakitCommander } from "clients/TrakitCommander";
import { ParamAssetMerge } from "commands/Assets/Requests/Parameters/ParamAssetMerge";
import { PayAsset } from "commands/Assets/Requests/PayAsset";
import { PayAssetAdvancedGet } from "commands/Assets/Requests/PayAssetAdvancedGet";
import { PayAssetAdvancedList, PayAssetAdvancedListByCompany, PayAssetAdvancedListByCompanyAndLabels, PayAssetAdvancedListByCompanyAndRefPairs } from "commands/Assets/Requests/PayAssetAdvancedList";
import { PayAssetBatchDelete } from "commands/Assets/Requests/PayAssetBatchDelete";
import { PayAssetBatchMerge } from "commands/Assets/Requests/PayAssetBatchMerge";
import { PayAssetDelete } from "commands/Assets/Requests/PayAssetDelete";
import { PayAssetDispatchGet } from "commands/Assets/Requests/PayAssetDispatchGet";
import { PayAssetDispatchList, PayAssetDispatchListByCompany, PayAssetDispatchListByCompanyAndLabels, PayAssetDispatchListByCompanyAndRefPairs } from "commands/Assets/Requests/PayAssetDispatchList";
import { PayAssetGeneralGet } from "commands/Assets/Requests/PayAssetGeneralGet";
import { PayAssetGeneralList, PayAssetGeneralListByCompany, PayAssetGeneralListByCompanyAndLabels, PayAssetGeneralListByCompanyAndRefPairs } from "commands/Assets/Requests/PayAssetGeneralList";
import { PayAssetGet } from "commands/Assets/Requests/PayAssetGet";
import { PayAssetList, PayAssetListByCompany, PayAssetListByCompanyAndLabels, PayAssetListByCompanyAndRefPairs } from "commands/Assets/Requests/PayAssetList";
import { PayAssetMerge } from "commands/Assets/Requests/PayAssetMerge";
import { PayAssetReactivate } from "commands/Assets/Requests/PayAssetReactivate";
import { PayAssetRestore } from "commands/Assets/Requests/PayAssetRestore";
import { PayAssetSuspend } from "commands/Assets/Requests/PayAssetSuspend";
import { RepAssetAdvancedGet } from "commands/Assets/Responses/RepAssetAdvancedGet";
import { RepAssetAdvancedList, RepAssetAdvancedListByCompany, RepAssetAdvancedListByCompanyAndLabels, RepAssetAdvancedListByCompanyAndRefPairs } from "commands/Assets/Responses/RepAssetAdvancedList";
import { RepAssetDelete } from "commands/Assets/Responses/RepAssetDelete";
import { RepAssetDispatchGet } from "commands/Assets/Responses/RepAssetDispatchGet";
import { RepAssetDispatchList, RepAssetDispatchListByCompany, RepAssetDispatchListByCompanyAndLabels, RepAssetDispatchListByCompanyAndRefPairs } from "commands/Assets/Responses/RepAssetDispatchList";
import { RepAssetGeneralGet } from "commands/Assets/Responses/RepAssetGeneralGet";
import { RepAssetGeneralList, RepAssetGeneralListByCompany, RepAssetGeneralListByCompanyAndLabels, RepAssetGeneralListByCompanyAndRefPairs } from "commands/Assets/Responses/RepAssetGeneralList";
import { RepAssetGet } from "commands/Assets/Responses/RepAssetGet";
import { RepAssetList, RepAssetListByCompany, RepAssetListByCompanyAndLabels, RepAssetListByCompanyAndRefPairs } from "commands/Assets/Responses/RepAssetList";
import { RepAssetMerge } from "commands/Assets/Responses/RepAssetMerge";
import { RepAssetSuspend } from "commands/Assets/Responses/RepAssetSuspend";
import { ParamBehaviourMerge } from "commands/Behaviours/Behaviours/Requests/Parameters/ParamBehaviourMerge";
import { PayBehaviour } from "commands/Behaviours/Behaviours/Requests/PayBehaviour";
import { PayBehaviourBatchDelete } from "commands/Behaviours/Behaviours/Requests/PayBehaviourBatchDelete";
import { PayBehaviourBatchMerge } from "commands/Behaviours/Behaviours/Requests/PayBehaviourBatchMerge";
import { PayBehaviourDelete } from "commands/Behaviours/Behaviours/Requests/PayBehaviourDelete";
import { PayBehaviourGet } from "commands/Behaviours/Behaviours/Requests/PayBehaviourGet";
import { PayBehaviourList, PayBehaviourListByCompany } from "commands/Behaviours/Behaviours/Requests/PayBehaviourList";
import { PayBehaviourMerge } from "commands/Behaviours/Behaviours/Requests/PayBehaviourMerge";
import { PayBehaviourRestore } from "commands/Behaviours/Behaviours/Requests/PayBehaviourRestore";
import { RepBehaviourBatchDelete } from "commands/Behaviours/Behaviours/Responses/RepBehaviourBatchDelete";
import { RepBehaviourBatchMerge } from "commands/Behaviours/Behaviours/Responses/RepBehaviourBatchMerge";
import { RepBehaviourDelete } from "commands/Behaviours/Behaviours/Responses/RepBehaviourDelete";
import { RepBehaviourGet } from "commands/Behaviours/Behaviours/Responses/RepBehaviourGet";
import { RepBehaviourList, RepBehaviourListByCompany } from "commands/Behaviours/Behaviours/Responses/RepBehaviourList";
import { RepBehaviourMerge } from "commands/Behaviours/Behaviours/Responses/RepBehaviourMerge";
import { PayBehaviourLogBatchDelete } from "commands/Behaviours/Logs/Requests/PayBehaviourLogBatchDelete";
import { PayBehaviourLogList, PayBehaviourLogListByCompany } from "commands/Behaviours/Logs/Requests/PayBehaviourLogList";
import { RepBehaviourLogBatchDelete } from "commands/Behaviours/Logs/Responses/RepBehaviourLogBatchDelete";
import { RepBehaviourLogList, RepBehaviourLogListByCompany } from "commands/Behaviours/Logs/Responses/RepBehaviourLogList";
import { ParamBehaviourScriptMerge } from "commands/Behaviours/Scripts/Requests/Parameters/ParamBehaviourScriptMerge";
import { PayBehaviourScript } from "commands/Behaviours/Scripts/Requests/PayBehaviourScript";
import { PayBehaviourScriptBatchDelete } from "commands/Behaviours/Scripts/Requests/PayBehaviourScriptBatchDelete";
import { PayBehaviourScriptBatchMerge } from "commands/Behaviours/Scripts/Requests/PayBehaviourScriptBatchMerge";
import { PayBehaviourScriptDelete } from "commands/Behaviours/Scripts/Requests/PayBehaviourScriptDelete";
import { PayBehaviourScriptGet } from "commands/Behaviours/Scripts/Requests/PayBehaviourScriptGet";
import { PayBehaviourScriptList, PayBehaviourScriptListByCompany } from "commands/Behaviours/Scripts/Requests/PayBehaviourScriptList";
import { PayBehaviourScriptMerge } from "commands/Behaviours/Scripts/Requests/PayBehaviourScriptMerge";
import { PayBehaviourScriptRestore } from "commands/Behaviours/Scripts/Requests/PayBehaviourScriptRestore";
import { RepBehaviourScriptBatchDelete } from "commands/Behaviours/Scripts/Responses/RepBehaviourScriptBatchDelete";
import { RepBehaviourScriptBatchMerge } from "commands/Behaviours/Scripts/Responses/RepBehaviourScriptBatchMerge";
import { RepBehaviourScriptDelete } from "commands/Behaviours/Scripts/Responses/RepBehaviourScriptDelete";
import { RepBehaviourScriptGet } from "commands/Behaviours/Scripts/Responses/RepBehaviourScriptGet";
import { RepBehaviourScriptList, RepBehaviourScriptListByCompany } from "commands/Behaviours/Scripts/Responses/RepBehaviourScriptList";
import { RepBehaviourScriptMerge } from "commands/Behaviours/Scripts/Responses/RepBehaviourScriptMerge";
import { RepCompanyGeneralGet } from "commands/Companies/Responses/RepCompanyGeneralGet";
import { RepCompanyGet } from "commands/Companies/Responses/RepCompanyGet";
import { RepCompanyList, RepCompanyListByCompany, RepCompanyListByCompanyAndRefPairs } from "commands/Companies/Responses/RepCompanyList";
import { RepCompanyMerge } from "commands/Companies/Responses/RepCompanyMerge";
import { RepCompanyPoliciesGet } from "commands/Companies/Responses/RepCompanyPoliciesGet";
import { RepCompanyPoliciesList, RepCompanyPoliciesListByCompany, RepCompanyPoliciesListByCompanyAndLabels, RepCompanyPoliciesListByCompanyAndRefPairs } from "commands/Companies/Responses/RepCompanyPoliciesList";
import { RepCompanyResellerGet } from "commands/Companies/Responses/RepCompanyResellerGet";
import { RepCompanyResellerList, RepCompanyResellerListByCompany, RepCompanyResellerListByCompanyAndLabels, RepCompanyResellerListByCompanyAndRefPairs } from "commands/Companies/Responses/RepCompanyResellerList";
import { RepCompanyStylesGet } from "commands/Companies/Responses/RepCompanyStylesGet";
import { RepCompanyStylesList, RepCompanyStylesListByCompany, RepCompanyStylesListByCompanyAndLabels, RepCompanyStylesListByCompanyAndRefPairs } from "commands/Companies/Responses/RepCompanyStylesList";
import { TrakitObjectCommander } from "./clients/TrakitObjectCommander";
import { ParamUserGroupMerge } from "./commands/Accounts/Groups/Requests/Parameters/ParamUserGroupMerge";
import { PayUserGroupBatchDelete } from "./commands/Accounts/Groups/Requests/PayUserGroupBatchDelete";
import { PayUserGroupBatchMerge } from "./commands/Accounts/Groups/Requests/PayUserGroupBatchMerge";
import { PayUserGroupDelete } from "./commands/Accounts/Groups/Requests/PayUserGroupDelete";
import { PayUserGroupGet } from "./commands/Accounts/Groups/Requests/PayUserGroupGet";
import { PayUserGroupListByCompany } from "./commands/Accounts/Groups/Requests/PayUserGroupList";
import { PayUserGroupMerge } from "./commands/Accounts/Groups/Requests/PayUserGroupMerge";
import { PayUserGroupRestore } from "./commands/Accounts/Groups/Requests/PayUserGroupRestore";
import { RepUserGroupBatchDelete } from "./commands/Accounts/Groups/Responses/RepUserGroupBatchDelete";
import { RepUserGroupBatchMerge } from "./commands/Accounts/Groups/Responses/RepUserGroupBatchMerge";
import { RepUserGroupDelete } from "./commands/Accounts/Groups/Responses/RepUserGroupDelete";
import { RepUserGroupGet } from "./commands/Accounts/Groups/Responses/RepUserGroupGet";
import { RepUserGroupListByCompany } from "./commands/Accounts/Groups/Responses/RepUserGroupList";
import { RepUserGroupMerge } from "./commands/Accounts/Groups/Responses/RepUserGroupMerge";
import { ParamMachineMerge } from "./commands/Accounts/Machines/Requests/Parameters/ParamMachineMerge";
import { PayMachineBatchDelete } from "./commands/Accounts/Machines/Requests/PayMachineBatchDelete";
import { PayMachineBatchMerge } from "./commands/Accounts/Machines/Requests/PayMachineBatchMerge";
import { PayMachineDelete } from "./commands/Accounts/Machines/Requests/PayMachineDelete";
import { PayMachineGet } from "./commands/Accounts/Machines/Requests/PayMachineGet";
import { PayMachineListByCompany } from "./commands/Accounts/Machines/Requests/PayMachineList";
import { PayMachineMerge } from "./commands/Accounts/Machines/Requests/PayMachineMerge";
import { PayMachineRestore } from "./commands/Accounts/Machines/Requests/PayMachineRestore";
import { RepMachineBatchDelete } from "./commands/Accounts/Machines/Responses/RepMachineBatchDelete";
import { RepMachineBatchMerge } from "./commands/Accounts/Machines/Responses/RepMachineBatchMerge";
import { RepMachineDelete } from "./commands/Accounts/Machines/Responses/RepMachineDelete";
import { RepMachineGet } from "./commands/Accounts/Machines/Responses/RepMachineGet";
import { RepMachineListByCompany } from "./commands/Accounts/Machines/Responses/RepMachineList";
import { RepMachineMerge } from "./commands/Accounts/Machines/Responses/RepMachineMerge";
import { ParamPermission } from "./commands/Accounts/Permissions/ParamPermission";
import { ParamSelfContactMerge } from "./commands/Accounts/Self/Requests/Parameters/ParamSelfContactMerge";
import { PaySelfContact } from "./commands/Accounts/Self/Requests/PaySelfContact";
import { PaySelfGet } from "./commands/Accounts/Self/Requests/PaySelfGet";
import { PaySelfLogin } from "./commands/Accounts/Self/Requests/PaySelfLogin";
import { PaySelfLogout } from "./commands/Accounts/Self/Requests/PaySelfLogout";
import { PaySelfPassword } from "./commands/Accounts/Self/Requests/PaySelfPassword";
import { PaySelfPreferences } from "./commands/Accounts/Self/Requests/PaySelfPreferences";
import { SelfMachine } from "./commands/Accounts/Self/Responses/Content/SelfMachine";
import { SelfUser } from "./commands/Accounts/Self/Responses/Content/SelfUser";
import { SelfUserAdvanced } from "./commands/Accounts/Self/Responses/Content/SelfUserAdvanced";
import { SelfUserGeneral } from "./commands/Accounts/Self/Responses/Content/SelfUserGeneral";
import { RepSelfContactMerge } from "./commands/Accounts/Self/Responses/RepSelfContactMerge";
import { RepSelfGet } from "./commands/Accounts/Self/Responses/RepSelfGet";
import { RepSelfLogout } from "./commands/Accounts/Self/Responses/RepSelfLogout";
import { RepSelfPasswordMerge } from "./commands/Accounts/Self/Responses/RepSelfPasswordMerge";
import { RepSelfPreferencesMerge } from "./commands/Accounts/Self/Responses/RepSelfPreferencesMerge";
import { ParamHandle } from "./commands/Accounts/Sessions/Requests/Parameters/ParamHandle";
import { PaySessionDelete } from "./commands/Accounts/Sessions/Requests/PaySessionDelete";
import { PaySessionListByCompany, PaySessionListByUser } from "./commands/Accounts/Sessions/Requests/PaySessionList";
import { SessionHandle } from "./commands/Accounts/Sessions/Responses/Content/SessionHandle";
import { ParamUserMerge } from "./commands/Accounts/Users/Requests/Parameters/ParamUserMerge";
import { PayUserAdvancedGet } from "./commands/Accounts/Users/Requests/PayUserAdvancedGet";
import { PayUserAdvancedListByCompany, PayUserAdvancedListByCompanyAndLabels, PayUserAdvancedListByCompanyAndRefPairs } from "./commands/Accounts/Users/Requests/PayUserAdvancedList";
import { PayUserBatchDelete } from "./commands/Accounts/Users/Requests/PayUserBatchDelete";
import { PayUserBatchMerge } from "./commands/Accounts/Users/Requests/PayUserBatchMerge";
import { PayUserDelete } from "./commands/Accounts/Users/Requests/PayUserDelete";
import { PayUserGeneralGet } from "./commands/Accounts/Users/Requests/PayUserGeneralGet";
import { PayUserGeneralListByCompany, PayUserGeneralListByCompanyAndLabels, PayUserGeneralListByCompanyAndRefPairs } from "./commands/Accounts/Users/Requests/PayUserGeneralList";
import { PayUserListByCompany } from "./commands/Accounts/Users/Requests/PayUserList";
import { PayUserMerge } from "./commands/Accounts/Users/Requests/PayUserMerge";
import { PayUserRestore } from "./commands/Accounts/Users/Requests/PayUserRestore";
import { RepUserAdvancedGet } from "./commands/Accounts/Users/Responses/RepUserAdvancedGet";
import { RepUserAdvancedListByCompany, RepUserAdvancedListByCompanyAndLabels, RepUserAdvancedListByCompanyAndRefPairs } from "./commands/Accounts/Users/Responses/RepUserAdvancedList";
import { RepUserBatchDelete } from "./commands/Accounts/Users/Responses/RepUserBatchDelete";
import { RepUserBatchMerge } from "./commands/Accounts/Users/Responses/RepUserBatchMerge";
import { RepUserDelete } from "./commands/Accounts/Users/Responses/RepUserDelete";
import { RepUserGeneralGet } from "./commands/Accounts/Users/Responses/RepUserGeneralGet";
import { RepUserGeneralListByCompany, RepUserGeneralListByCompanyAndLabels, RepUserGeneralListByCompanyAndRefPairs } from "./commands/Accounts/Users/Responses/RepUserGeneralList";
import { RepUserGet } from "./commands/Accounts/Users/Responses/RepUserGet";
import { RepUserListByCompany } from "./commands/Accounts/Users/Responses/RepUserList";
import { RepUserMerge } from "./commands/Accounts/Users/Responses/RepUserMerge";
import { ROUTE_DECODE, ROUTE_ENCODE } from "./commands/API/Geography/Polyline";
import { IParamAsset } from "./commands/API/Requests/Parameters/IParamAsset";
import { IParamBillingProfile } from "./commands/API/Requests/Parameters/IParamBillingProfile";
import { IParamCompany } from "./commands/API/Requests/Parameters/IParamCompany";
import { ParamCode } from "./commands/API/Requests/Parameters/ParamCode";
import { ParamGuid } from "./commands/API/Requests/Parameters/ParamGuid";
import { ParamId } from "./commands/API/Requests/Parameters/ParamId";
import { ParamIdentifier } from "./commands/API/Requests/Parameters/ParamIdentifier";
import { ParamKey } from "./commands/API/Requests/Parameters/ParamKey";
import { ParamLogin } from "./commands/API/Requests/Parameters/ParamLogin";
import { ParamMerge } from "./commands/API/Requests/Parameters/ParamMerge";
import { ParamMergeSubscribable } from "./commands/API/Requests/Parameters/ParamMergeSubscribable";
import { Payload } from "./commands/API/Requests/Payload";
import { ContentCode } from "./commands/API/Responses/Content/ContentCode";
import { ContentCodeCompany } from "./commands/API/Responses/Content/ContentCodeCompany";
import { ContentCodeDeleted } from "./commands/API/Responses/Content/ContentCodeDeleted";
import { ContentId } from "./commands/API/Responses/Content/ContentId";
import { ContentIdAsset } from "./commands/API/Responses/Content/ContentIdAsset";
import { ContentIdBillingProfile } from "./commands/API/Responses/Content/ContentIdBillingProfile";
import { ContentIdCompany } from "./commands/API/Responses/Content/ContentIdCompany";
import { ContentIdCompanyTemplate } from "./commands/API/Responses/Content/ContentIdCompanyTemplate";
import { ContentIdendifier } from "./commands/API/Responses/Content/ContentIdendifier";
import { ContentIdendifierAsset } from "./commands/API/Responses/Content/ContentIdendifierAsset";
import { ContentIdendifierCompany } from "./commands/API/Responses/Content/ContentIdendifierCompany";
import { ContentIdendifierDeleted } from "./commands/API/Responses/Content/ContentIdendifierDeleted";
import { ContentIdendifierSuspended } from "./commands/API/Responses/Content/ContentIdendifierSuspended";
import { ContentIdParent } from "./commands/API/Responses/Content/ContentIdParent";
import { ContentIdScript } from "./commands/API/Responses/Content/ContentIdScript";
import { ContentIdSuspended } from "./commands/API/Responses/Content/ContentIdSuspended";
import { ContentKey } from "./commands/API/Responses/Content/ContentKey";
import { ContentKeyCompany } from "./commands/API/Responses/Content/ContentKeyCompany";
import { ContentKeyDeleted } from "./commands/API/Responses/Content/ContentKeyDeleted";
import { ContentLogin } from "./commands/API/Responses/Content/ContentLogin";
import { ContentLoginCompany } from "./commands/API/Responses/Content/ContentLoginCompany";
import { ContentLoginDeleted } from "./commands/API/Responses/Content/ContentLoginDeleted";
import { ContentParentDeleted } from "./commands/API/Responses/Content/ContentParentDeleted";
import { ErrorCode } from "./commands/API/Responses/Errors/ErrorCode";
import { ErrorDetail } from "./commands/API/Responses/Errors/ErrorDetail";
import { ErrorDetailBadIds } from "./commands/API/Responses/Errors/ErrorDetailBadIds";
import { ErrorDetailBadIndexes } from "./commands/API/Responses/Errors/ErrorDetailBadIndexes";
import { ErrorDetailBadKeys } from "./commands/API/Responses/Errors/ErrorDetailBadKeys";
import { ErrorDetailBatch } from "./commands/API/Responses/Errors/ErrorDetailBatch";
import { ErrorDetailContactInUse } from "./commands/API/Responses/Errors/ErrorDetailContactInUse";
import { ErrorDetailCount } from "./commands/API/Responses/Errors/ErrorDetailCount";
import { ErrorDetailEnum } from "./commands/API/Responses/Errors/ErrorDetailEnum";
import { ErrorDetailEscalation } from "./commands/API/Responses/Errors/ErrorDetailEscalation";
import { ErrorDetailExternals } from "./commands/API/Responses/Errors/ErrorDetailExternals";
import { ErrorDetailFormTemplateInUse } from "./commands/API/Responses/Errors/ErrorDetailFormTemplateInUse";
import { ErrorDetailInput } from "./commands/API/Responses/Errors/ErrorDetailInput";
import { ErrorDetailLocked } from "./commands/API/Responses/Errors/ErrorDetailLocked";
import { ErrorDetailMinMax } from "./commands/API/Responses/Errors/ErrorDetailMinMax";
import { ErrorDetailParent } from "./commands/API/Responses/Errors/ErrorDetailParent";
import { ErrorDetailParse } from "./commands/API/Responses/Errors/ErrorDetailParse";
import { ErrorDetailPhone } from "./commands/API/Responses/Errors/ErrorDetailPhone";
import { ErrorDetailSecret } from "./commands/API/Responses/Errors/ErrorDetailSecret";
import { ErrorDetailStack } from "./commands/API/Responses/Errors/ErrorDetailStack";
import { ErrorDetailThrottled } from "./commands/API/Responses/Errors/ErrorDetailThrottled";
import { ErrorDetailType } from "./commands/API/Responses/Errors/ErrorDetailType";
import { ErrorDetailUserGroupInUse } from "./commands/API/Responses/Errors/ErrorDetailUserGroupInUse";
import { IRepList } from "./commands/API/Responses/IRepList";
import { IRepListByAsset } from "./commands/API/Responses/IRepListByAsset";
import { IRepListByCompany } from "./commands/API/Responses/IRepListByCompany";
import { IRepListByDate } from "./commands/API/Responses/IRepListByDate";
import { IRepListById } from "./commands/API/Responses/IRepListById";
import { IRepListByKey } from "./commands/API/Responses/IRepListByKey";
import { IRepListByLabels } from "./commands/API/Responses/IRepListByLabels";
import { IRepListByReferences } from "./commands/API/Responses/IRepListByReferences";
import { IRepListByUser } from "./commands/API/Responses/IRepListByUser";
import { Reply } from "./commands/API/Responses/Reply";


/**
 * Version number for this release.
 */
export const version = 5.03;

/**
 * Abstract command execution classes.
 */
export {
	TrakitCommander,
	TrakitObjectCommander,
};
    
//#region API
/**
 * Command request payloads and parameter classes.
 */
export {
	Payload,
	type IParamAsset,
	type IParamBillingProfile,
	type IParamCompany,
	ParamCode,
	ParamGuid,
	ParamId,
	ParamIdentifier,
	ParamKey,
	ParamLogin,
	ParamMerge,
	ParamMergeSubscribable,
};
/**
 * Command responses and content classes.
 */
export {
	Reply,
	type IRepList,
	type IRepListByAsset,
	type IRepListByCompany,
	type IRepListByDate,
	type IRepListById,
	type IRepListByKey,
	type IRepListByLabels,
	type IRepListByReferences,
	type IRepListByUser,

	ContentCode,
	ContentCodeCompany,
	ContentCodeDeleted,
	ContentIdBillingProfile,
	ContentIdendifierCompany,
	ContentIdendifierSuspended,
	ContentIdParent,
	ContentIdSuspended,
	ContentKeyCompany,
	ContentLogin,
	ContentLoginDeleted,
	ContentLoginCompany,
	ContentParentDeleted,
	ContentKeyDeleted,
	ContentKey,
	ContentIdScript,
	ContentIdendifierAsset,
	ContentIdendifier,
	ContentIdendifierDeleted,
	ContentIdCompanyTemplate,
	ContentIdCompany,
	ContentIdAsset,
	ContentId,
};
/**
 * Error messages and details for responses.
 */
export {
	ErrorCode,
	ErrorDetail,
	ErrorDetailBadIds,
	ErrorDetailBadIndexes,
	ErrorDetailBadKeys,
	ErrorDetailBatch,
	ErrorDetailContactInUse,
	ErrorDetailCount,
	ErrorDetailEnum,
	ErrorDetailEscalation,
	ErrorDetailExternals,
	ErrorDetailFormTemplateInUse,
	ErrorDetailInput,
	ErrorDetailLocked,
	ErrorDetailMinMax,
	ErrorDetailParent,
	ErrorDetailParse,
	ErrorDetailPhone,
	ErrorDetailSecret,
	ErrorDetailStack,
	ErrorDetailThrottled,
	ErrorDetailType,
	ErrorDetailUserGroupInUse,
};
/**
 * Polyline encoding and decoding utilities.
 */
export const polyline = {
	encode: ROUTE_ENCODE,
	decode: ROUTE_DECODE,
};
//#endregion API

//#region Accounts
export {
	ParamHandle,
	ParamMachineMerge,
	ParamPermission,
	ParamSelfContactMerge,
	ParamUserGroupMerge,
	ParamUserMerge,
	PayMachineBatchDelete,
	PayMachineBatchMerge,
	PayMachineDelete,
	PayMachineGet,
	PayMachineListByCompany,
	PayMachineMerge,
	PayMachineRestore,
	PaySelfContact,
	PaySelfGet,
	PaySelfLogin,
	PaySelfLogout,
	PaySelfPassword,
	PaySelfPreferences,
	PaySessionDelete,
	PaySessionListByCompany,
	PaySessionListByUser,
	PayUserAdvancedGet,
	PayUserAdvancedListByCompany,
	PayUserAdvancedListByCompanyAndLabels,
	PayUserAdvancedListByCompanyAndRefPairs,
	PayUserBatchDelete,
	PayUserBatchMerge,
	PayUserDelete,
	PayUserGeneralGet,
	PayUserGeneralListByCompany,
	PayUserGeneralListByCompanyAndLabels,
	PayUserGeneralListByCompanyAndRefPairs,
	PayUserGroupBatchDelete,
	PayUserGroupBatchMerge,
	PayUserGroupDelete,
	PayUserGroupGet,
	PayUserGroupListByCompany,
	PayUserGroupMerge,
	PayUserGroupRestore,
	PayUserListByCompany,
	PayUserMerge,
	PayUserRestore,
	RepMachineBatchDelete,
	RepMachineBatchMerge,
	RepMachineDelete,
	RepMachineGet,
	RepMachineListByCompany,
	RepMachineMerge,
	RepSelfContactMerge,
	RepSelfGet,
	RepSelfLogout,
	RepSelfPasswordMerge,
	RepSelfPreferencesMerge,
	RepUserAdvancedGet,
	RepUserAdvancedListByCompany,
	RepUserAdvancedListByCompanyAndLabels,
	RepUserAdvancedListByCompanyAndRefPairs,
	RepUserBatchDelete,
	RepUserBatchMerge,
	RepUserDelete,
	RepUserGeneralGet,
	RepUserGeneralListByCompany,
	RepUserGeneralListByCompanyAndLabels,
	RepUserGeneralListByCompanyAndRefPairs,
	RepUserGet,
	RepUserGroupBatchDelete,
	RepUserGroupBatchMerge,
	RepUserGroupDelete,
	RepUserGroupGet,
	RepUserGroupListByCompany,
	RepUserGroupMerge,
	RepUserListByCompany,
	RepUserMerge,
	SelfMachine,
	SelfUser,
	SelfUserAdvanced,
	SelfUserGeneral,
	SessionHandle,
};
//#endregion Accounts

//#region Assets
export {
	ParamAssetMerge, PayAsset,
	PayAssetAdvancedGet,
	PayAssetAdvancedList,
	PayAssetAdvancedListByCompany,
	PayAssetAdvancedListByCompanyAndLabels,
	PayAssetAdvancedListByCompanyAndRefPairs,
	PayAssetBatchDelete,
	PayAssetBatchMerge,
	PayAssetDelete,
	PayAssetDispatchGet,
	PayAssetDispatchList,
	PayAssetDispatchListByCompany,
	PayAssetDispatchListByCompanyAndLabels,
	PayAssetDispatchListByCompanyAndRefPairs,
	PayAssetGeneralGet,
	PayAssetGeneralList,
	PayAssetGeneralListByCompany,
	PayAssetGeneralListByCompanyAndLabels,
	PayAssetGeneralListByCompanyAndRefPairs,
	PayAssetGet,
	PayAssetList,
	PayAssetListByCompany,
	PayAssetListByCompanyAndLabels,
	PayAssetListByCompanyAndRefPairs,
	PayAssetMerge,
	PayAssetReactivate,
	PayAssetRestore,
	PayAssetSuspend, RepAssetAdvancedGet,
	RepAssetAdvancedList,
	RepAssetAdvancedListByCompany,
	RepAssetAdvancedListByCompanyAndLabels,
	RepAssetAdvancedListByCompanyAndRefPairs,
	RepAssetDelete,
	RepAssetDispatchGet,
	RepAssetDispatchList,
	RepAssetDispatchListByCompany,
	RepAssetDispatchListByCompanyAndLabels,
	RepAssetDispatchListByCompanyAndRefPairs,
	RepAssetGeneralGet,
	RepAssetGeneralList,
	RepAssetGeneralListByCompany,
	RepAssetGeneralListByCompanyAndLabels,
	RepAssetGeneralListByCompanyAndRefPairs,
	RepAssetGet,
	RepAssetList,
	RepAssetListByCompany,
	RepAssetListByCompanyAndLabels,
	RepAssetListByCompanyAndRefPairs,
	RepAssetMerge,
	RepAssetSuspend,
};
//#endregion Assets

//#region Behaviours
export {
	ParamBehaviourMerge,
	// Scripts Requests
	ParamBehaviourScriptMerge,
	// Behaviours Requests
	PayBehaviour,
	PayBehaviourBatchDelete,
	PayBehaviourBatchMerge,
	PayBehaviourDelete,
	PayBehaviourGet,
	PayBehaviourList,
	PayBehaviourListByCompany,
	// Logs Requests
	PayBehaviourLogBatchDelete,
	PayBehaviourLogList,
	PayBehaviourLogListByCompany, PayBehaviourMerge,
	PayBehaviourRestore, PayBehaviourScript,
	PayBehaviourScriptBatchDelete,
	PayBehaviourScriptBatchMerge,
	PayBehaviourScriptDelete,
	PayBehaviourScriptGet,
	PayBehaviourScriptList,
	PayBehaviourScriptListByCompany,
	PayBehaviourScriptMerge,
	PayBehaviourScriptRestore,
	// Behaviours Responses
	RepBehaviourBatchDelete,
	RepBehaviourBatchMerge,
	RepBehaviourDelete,
	RepBehaviourGet,
	RepBehaviourList,
	RepBehaviourListByCompany,
	// Logs Responses
	RepBehaviourLogBatchDelete,
	RepBehaviourLogList,
	RepBehaviourLogListByCompany, RepBehaviourMerge,
	// Scripts Responses
	RepBehaviourScriptBatchDelete,
	RepBehaviourScriptBatchMerge,
	RepBehaviourScriptDelete,
	RepBehaviourScriptGet,
	RepBehaviourScriptList,
	RepBehaviourScriptListByCompany,
	RepBehaviourScriptMerge,
};
//#endregion Behaviours

//#region Billing
//#endregion Billing

//#region Company
export {
	RepCompanyGeneralGet,
	RepCompanyGet,
	RepCompanyList,
	RepCompanyListByCompany,
	RepCompanyListByCompanyAndRefPairs,
	RepCompanyMerge,
	RepCompanyPoliciesGet,
	RepCompanyPoliciesList,
	RepCompanyPoliciesListByCompany,
	RepCompanyPoliciesListByCompanyAndLabels,
	RepCompanyPoliciesListByCompanyAndRefPairs,
	RepCompanyResellerGet,
	RepCompanyResellerList,
	RepCompanyResellerListByCompany,
	RepCompanyResellerListByCompanyAndLabels,
	RepCompanyResellerListByCompanyAndRefPairs,
	RepCompanyStylesGet,
	RepCompanyStylesList,
	RepCompanyStylesListByCompany,
	RepCompanyStylesListByCompanyAndLabels,
	RepCompanyStylesListByCompanyAndRefPairs,
};
//#endregion Company

//#region Dispatch
//#endregion Dispatch

//#region Hosting
//#endregion Hosting

//#region Images
//#endregion Images

//#region Maintenance
//#endregion Maintenance

//#region Places
//#endregion Places

//#region Providers
//#endregion Providers

//#region Reports
//#endregion Reports
