/**
 * Object definitions that work with our various APIs.
 * {@link https://github.com/trakitwireless/trakit-ts-commands|TypeScript documentation.}
 * Last updated on Thu Feb 27 2025 11:59:01 
 * @copyright Trak-iT Wireless Inc. 2025
 */
import { TrakitCommander } from "clients/TrakitCommander";
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

// Accounts exports
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
	SessionHandle
};
//#endregion Accounts

//#region Assets
//#endregion Assets

//#region Behaviours
//#endregion Behaviours

//#region Billing
//#endregion Billing

//#region Company
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
