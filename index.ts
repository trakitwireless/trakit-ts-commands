/**
 * Command definitions that work with our various APIs.
 * {@link https://github.com/trakitwireless/trakit-ts-commands|TypeScript documentation.}
 * Last updated on Thu Sept 26 2025 15:28 
 * @copyright Trak-iT Wireless Inc. 2025
 */
import { ParamContactMerge } from "./commands/Accounts/Contacts/Requests/Parameters/ParamContactMerge";
import { PayContact } from "./commands/Accounts/Contacts/Requests/PayContact";
import { PayContactBatchDelete } from "./commands/Accounts/Contacts/Requests/PayContactBatchDelete";
import { PayContactBatchMerge } from "./commands/Accounts/Contacts/Requests/PayContactBatchMerge";
import { PayContactDelete } from "./commands/Accounts/Contacts/Requests/PayContactDelete";
import { PayContactGet } from "./commands/Accounts/Contacts/Requests/PayContactGet";
import { PayContactList, PayContactListByCompany } from "./commands/Accounts/Contacts/Requests/PayContactList";
import { PayContactMerge } from "./commands/Accounts/Contacts/Requests/PayContactMerge";
import { PayContactRestore } from "./commands/Accounts/Contacts/Requests/PayContactRestore";
import { RepContactBatchDelete } from "./commands/Accounts/Contacts/Responses/RepContactBatchDelete";
import { RepContactBatchMerge } from "./commands/Accounts/Contacts/Responses/RepContactBatchMerge";
import { RepContactDelete } from "./commands/Accounts/Contacts/Responses/RepContactDelete";
import { RepContactGet } from "./commands/Accounts/Contacts/Responses/RepContactGet";
import { RepContactList, RepContactListByCompany } from "./commands/Accounts/Contacts/Responses/RepContactList";
import { RepContactMerge } from "./commands/Accounts/Contacts/Responses/RepContactMerge";
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
import { RepSelfContact } from "./commands/Accounts/Self/Responses/RepSelfContact";
import { RepSelfGet } from "./commands/Accounts/Self/Responses/RepSelfGet";
import { RepSelfLogout } from "./commands/Accounts/Self/Responses/RepSelfLogout";
import { RepSelfPassword } from "./commands/Accounts/Self/Responses/RepSelfPassword";
import { RepSelfPreferences } from "./commands/Accounts/Self/Responses/RepSelfPreferences";
import { ParamHandle } from "./commands/Accounts/Sessions/Requests/Parameters/ParamHandle";
import { PaySessionDelete } from "./commands/Accounts/Sessions/Requests/PaySessionDelete";
import { PaySessionListByCompany, PaySessionListByUser } from "./commands/Accounts/Sessions/Requests/PaySessionList";
import { SessionHandle } from "./commands/Accounts/Sessions/Responses/Content/SessionHandle";
import { ParamUserMerge } from "./commands/Accounts/Users/Requests/Parameters/ParamUserMerge";
import { PayUserAdvancedGet } from "./commands/Accounts/Users/Requests/PayUserAdvancedGet";
import { PayUserAdvancedListByCompany, PayUserAdvancedListByGroup } from "./commands/Accounts/Users/Requests/PayUserAdvancedList";
import { PayUserBatchDelete } from "./commands/Accounts/Users/Requests/PayUserBatchDelete";
import { PayUserBatchMerge } from "./commands/Accounts/Users/Requests/PayUserBatchMerge";
import { PayUserDelete } from "./commands/Accounts/Users/Requests/PayUserDelete";
import { PayUserGeneralGet } from "./commands/Accounts/Users/Requests/PayUserGeneralGet";
import { PayUserGeneralListByCompany, PayUserGeneralListByGroup } from "./commands/Accounts/Users/Requests/PayUserGeneralList";
import { PayUserListByCompany } from "./commands/Accounts/Users/Requests/PayUserList";
import { PayUserMerge } from "./commands/Accounts/Users/Requests/PayUserMerge";
import { PayUserRestore } from "./commands/Accounts/Users/Requests/PayUserRestore";
import { RepUserAdvancedGet } from "./commands/Accounts/Users/Responses/RepUserAdvancedGet";
import { RepUserAdvancedListByCompany, RepUserAdvancedListByGroup } from "./commands/Accounts/Users/Responses/RepUserAdvancedList";
import { RepUserBatchDelete } from "./commands/Accounts/Users/Responses/RepUserBatchDelete";
import { RepUserBatchMerge } from "./commands/Accounts/Users/Responses/RepUserBatchMerge";
import { RepUserDelete } from "./commands/Accounts/Users/Responses/RepUserDelete";
import { RepUserGeneralGet } from "./commands/Accounts/Users/Responses/RepUserGeneralGet";
import { RepUserGeneralListByCompany, RepUserGeneralListByGroup } from "./commands/Accounts/Users/Responses/RepUserGeneralList";
import { RepUserGet } from "./commands/Accounts/Users/Responses/RepUserGet";
import { RepUserListByCompany } from "./commands/Accounts/Users/Responses/RepUserList";
import { RepUserMerge } from "./commands/Accounts/Users/Responses/RepUserMerge";
import { ROUTE_DECODE, ROUTE_ENCODE } from "./commands/API/Geography/Polyline";
import { IPayListByAsset } from "./commands/API/Requests/IPayListByAsset";
import { IPayListByCompany } from "./commands/API/Requests/IPayListByCompany";
import { IPayListByDate } from "./commands/API/Requests/IPayListByDate";
import { IPayListById } from "./commands/API/Requests/IPayListById";
import { IPayListByKey } from "./commands/API/Requests/IPayListByKey";
import { IPayListByLabels } from "./commands/API/Requests/IPayListByLabels";
import { IPayListByReferences } from "./commands/API/Requests/IPayListByReferences";
import { IPayListByUser } from "./commands/API/Requests/IPayListByUser";
import { IPaySingle } from "./commands/API/Requests/IPaySingle";
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
import { ActionType, Payload } from "./commands/API/Requests/Payload";
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
import { ParamAssetMerge } from "./commands/Assets/Requests/Parameters/ParamAssetMerge";
import { PayAsset } from "./commands/Assets/Requests/PayAsset";
import { PayAssetAdvancedGet } from "./commands/Assets/Requests/PayAssetAdvancedGet";
import { PayAssetAdvancedList, PayAssetAdvancedListByCompany, PayAssetAdvancedListByCompanyAndLabels, PayAssetAdvancedListByCompanyAndRefPairs } from "./commands/Assets/Requests/PayAssetAdvancedList";
import { PayAssetBatchDelete } from "./commands/Assets/Requests/PayAssetBatchDelete";
import { PayAssetBatchMerge } from "./commands/Assets/Requests/PayAssetBatchMerge";
import { PayAssetDelete } from "./commands/Assets/Requests/PayAssetDelete";
import { PayAssetDispatchGet } from "./commands/Assets/Requests/PayAssetDispatchGet";
import { PayAssetDispatchList, PayAssetDispatchListByCompany, PayAssetDispatchListByCompanyAndLabels, PayAssetDispatchListByCompanyAndRefPairs } from "./commands/Assets/Requests/PayAssetDispatchList";
import { PayAssetGeneralGet } from "./commands/Assets/Requests/PayAssetGeneralGet";
import { PayAssetGeneralList, PayAssetGeneralListByCompany, PayAssetGeneralListByCompanyAndLabels, PayAssetGeneralListByCompanyAndRefPairs } from "./commands/Assets/Requests/PayAssetGeneralList";
import { PayAssetGet } from "./commands/Assets/Requests/PayAssetGet";
import { PayAssetList, PayAssetListByCompany, PayAssetListByCompanyAndLabels, PayAssetListByCompanyAndRefPairs } from "./commands/Assets/Requests/PayAssetList";
import { PayAssetMerge } from "./commands/Assets/Requests/PayAssetMerge";
import { PayAssetReactivate } from "./commands/Assets/Requests/PayAssetReactivate";
import { PayAssetRestore } from "./commands/Assets/Requests/PayAssetRestore";
import { PayAssetSuspend } from "./commands/Assets/Requests/PayAssetSuspend";
import { RepAssetAdvancedGet } from "./commands/Assets/Responses/RepAssetAdvancedGet";
import { RepAssetAdvancedList, RepAssetAdvancedListByCompany, RepAssetAdvancedListByCompanyAndLabels, RepAssetAdvancedListByCompanyAndRefPairs } from "./commands/Assets/Responses/RepAssetAdvancedList";
import { RepAssetDelete } from "./commands/Assets/Responses/RepAssetDelete";
import { RepAssetDispatchGet } from "./commands/Assets/Responses/RepAssetDispatchGet";
import { RepAssetDispatchList, RepAssetDispatchListByCompany, RepAssetDispatchListByCompanyAndLabels, RepAssetDispatchListByCompanyAndRefPairs } from "./commands/Assets/Responses/RepAssetDispatchList";
import { RepAssetGeneralGet } from "./commands/Assets/Responses/RepAssetGeneralGet";
import { RepAssetGeneralList, RepAssetGeneralListByCompany, RepAssetGeneralListByCompanyAndLabels, RepAssetGeneralListByCompanyAndRefPairs } from "./commands/Assets/Responses/RepAssetGeneralList";
import { RepAssetGet } from "./commands/Assets/Responses/RepAssetGet";
import { RepAssetList, RepAssetListByCompany, RepAssetListByCompanyAndLabels, RepAssetListByCompanyAndRefPairs } from "./commands/Assets/Responses/RepAssetList";
import { RepAssetMerge } from "./commands/Assets/Responses/RepAssetMerge";
import { RepAssetSuspend } from "./commands/Assets/Responses/RepAssetSuspend";
import { ParamBehaviourMerge } from "./commands/Behaviours/Behaviours/Requests/Parameters/ParamBehaviourMerge";
import { PayBehaviour } from "./commands/Behaviours/Behaviours/Requests/PayBehaviour";
import { PayBehaviourBatchDelete } from "./commands/Behaviours/Behaviours/Requests/PayBehaviourBatchDelete";
import { PayBehaviourBatchMerge } from "./commands/Behaviours/Behaviours/Requests/PayBehaviourBatchMerge";
import { PayBehaviourDelete } from "./commands/Behaviours/Behaviours/Requests/PayBehaviourDelete";
import { PayBehaviourGet } from "./commands/Behaviours/Behaviours/Requests/PayBehaviourGet";
import { PayBehaviourList, PayBehaviourListByCompany } from "./commands/Behaviours/Behaviours/Requests/PayBehaviourList";
import { PayBehaviourMerge } from "./commands/Behaviours/Behaviours/Requests/PayBehaviourMerge";
import { PayBehaviourRestore } from "./commands/Behaviours/Behaviours/Requests/PayBehaviourRestore";
import { RepBehaviourBatchDelete } from "./commands/Behaviours/Behaviours/Responses/RepBehaviourBatchDelete";
import { RepBehaviourBatchMerge } from "./commands/Behaviours/Behaviours/Responses/RepBehaviourBatchMerge";
import { RepBehaviourDelete } from "./commands/Behaviours/Behaviours/Responses/RepBehaviourDelete";
import { RepBehaviourGet } from "./commands/Behaviours/Behaviours/Responses/RepBehaviourGet";
import { RepBehaviourList, RepBehaviourListByCompany } from "./commands/Behaviours/Behaviours/Responses/RepBehaviourList";
import { RepBehaviourMerge } from "./commands/Behaviours/Behaviours/Responses/RepBehaviourMerge";
import { PayBehaviourLogBatchDelete } from "./commands/Behaviours/Logs/Requests/PayBehaviourLogBatchDelete";
import { PayBehaviourLogList, PayBehaviourLogListByCompany } from "./commands/Behaviours/Logs/Requests/PayBehaviourLogList";
import { RepBehaviourLogBatchDelete } from "./commands/Behaviours/Logs/Responses/RepBehaviourLogBatchDelete";
import { RepBehaviourLogList, RepBehaviourLogListByCompany } from "./commands/Behaviours/Logs/Responses/RepBehaviourLogList";
import { ParamBehaviourScriptMerge } from "./commands/Behaviours/Scripts/Requests/Parameters/ParamBehaviourScriptMerge";
import { PayBehaviourScript } from "./commands/Behaviours/Scripts/Requests/PayBehaviourScript";
import { PayBehaviourScriptBatchDelete } from "./commands/Behaviours/Scripts/Requests/PayBehaviourScriptBatchDelete";
import { PayBehaviourScriptBatchMerge } from "./commands/Behaviours/Scripts/Requests/PayBehaviourScriptBatchMerge";
import { PayBehaviourScriptDelete } from "./commands/Behaviours/Scripts/Requests/PayBehaviourScriptDelete";
import { PayBehaviourScriptGet } from "./commands/Behaviours/Scripts/Requests/PayBehaviourScriptGet";
import { PayBehaviourScriptList, PayBehaviourScriptListByCompany } from "./commands/Behaviours/Scripts/Requests/PayBehaviourScriptList";
import { PayBehaviourScriptMerge } from "./commands/Behaviours/Scripts/Requests/PayBehaviourScriptMerge";
import { PayBehaviourScriptRestore } from "./commands/Behaviours/Scripts/Requests/PayBehaviourScriptRestore";
import { RepBehaviourScriptBatchDelete } from "./commands/Behaviours/Scripts/Responses/RepBehaviourScriptBatchDelete";
import { RepBehaviourScriptBatchMerge } from "./commands/Behaviours/Scripts/Responses/RepBehaviourScriptBatchMerge";
import { RepBehaviourScriptDelete } from "./commands/Behaviours/Scripts/Responses/RepBehaviourScriptDelete";
import { RepBehaviourScriptGet } from "./commands/Behaviours/Scripts/Responses/RepBehaviourScriptGet";
import { RepBehaviourScriptList, RepBehaviourScriptListByCompany } from "./commands/Behaviours/Scripts/Responses/RepBehaviourScriptList";
import { RepBehaviourScriptMerge } from "./commands/Behaviours/Scripts/Responses/RepBehaviourScriptMerge";
import { RepCompanyGeneralGet } from "./commands/Companies/Responses/RepCompanyGeneralGet";
import { RepCompanyGet } from "./commands/Companies/Responses/RepCompanyGet";
import { RepCompanyList, RepCompanyListByCompany, RepCompanyListByCompanyAndRefPairs } from "./commands/Companies/Responses/RepCompanyList";
import { RepCompanyMerge } from "./commands/Companies/Responses/RepCompanyMerge";
import { RepCompanyPoliciesGet } from "./commands/Companies/Responses/RepCompanyPoliciesGet";
import { RepCompanyPoliciesList, RepCompanyPoliciesListByCompany, RepCompanyPoliciesListByCompanyAndLabels, RepCompanyPoliciesListByCompanyAndRefPairs } from "./commands/Companies/Responses/RepCompanyPoliciesList";
import { RepCompanyResellerGet } from "./commands/Companies/Responses/RepCompanyResellerGet";
import { RepCompanyResellerList, RepCompanyResellerListByCompany, RepCompanyResellerListByCompanyAndLabels, RepCompanyResellerListByCompanyAndRefPairs } from "./commands/Companies/Responses/RepCompanyResellerList";
import { RepCompanyStylesGet } from "./commands/Companies/Responses/RepCompanyStylesGet";
import { RepCompanyStylesList, RepCompanyStylesListByCompany, RepCompanyStylesListByCompanyAndLabels, RepCompanyStylesListByCompanyAndRefPairs } from "./commands/Companies/Responses/RepCompanyStylesList";
import { PayDispatchJob } from "./commands/Dispatch/DispatchJob/Requests/PayDispatchJob";
import { PayDispatchJobBatchDelete } from "./commands/Dispatch/DispatchJob/Requests/PayDispatchJobBatchDelete";
import { PayDispatchJobBatchMerge } from "./commands/Dispatch/DispatchJob/Requests/PayDispatchJobBatchMerge";
import { PayDispatchJobDelete } from "./commands/Dispatch/DispatchJob/Requests/PayDispatchJobDelete";
import { PayDispatchJobGet } from "./commands/Dispatch/DispatchJob/Requests/PayDispatchJobGet";
import { PayDispatchJobMerge } from "./commands/Dispatch/DispatchJob/Requests/PayDispatchJobMerge";
import { PayDispatchJobRestore } from "./commands/Dispatch/DispatchJob/Requests/PayDispatchJobRestore";
import { RepDispatchJobBatchDelete } from "./commands/Dispatch/DispatchJob/Responses/RepDispatchJobBatchDelete";
import { RepDispatchJobBatchMerge } from "./commands/Dispatch/DispatchJob/Responses/RepDispatchJobBatchMerge";
import { RepDispatchJobDelete } from "./commands/Dispatch/DispatchJob/Responses/RepDispatchJobDelete";
import { RepDispatchJobGet } from "./commands/Dispatch/DispatchJob/Responses/RepDispatchJobGet";
import { RepDispatchJobMerge } from "./commands/Dispatch/DispatchJob/Responses/RepDispatchJobMerge";
import { PayDispatchTask } from "./commands/Dispatch/DispatchTask/Requests/PayDispatchTask";
import { PayDispatchTaskBatchDelete } from "./commands/Dispatch/DispatchTask/Requests/PayDispatchTaskBatchDelete";
import { PayDispatchTaskBatchMerge } from "./commands/Dispatch/DispatchTask/Requests/PayDispatchTaskBatchMerge";
import { PayDispatchTaskDelete } from "./commands/Dispatch/DispatchTask/Requests/PayDispatchTaskDelete";
import { PayDispatchTaskGet } from "./commands/Dispatch/DispatchTask/Requests/PayDispatchTaskGet";
import { PayDispatchTaskMerge } from "./commands/Dispatch/DispatchTask/Requests/PayDispatchTaskMerge";
import { PayDispatchTaskRestore } from "./commands/Dispatch/DispatchTask/Requests/PayDispatchTaskRestore";
import { RepDispatchTaskBatchDelete } from "./commands/Dispatch/DispatchTask/Responses/RepDispatchTaskBatchDelete";
import { RepDispatchTaskBatchMerge } from "./commands/Dispatch/DispatchTask/Responses/RepDispatchTaskBatchMerge";
import { RepDispatchTaskDelete } from "./commands/Dispatch/DispatchTask/Responses/RepDispatchTaskDelete";
import { RepDispatchTaskGet } from "./commands/Dispatch/DispatchTask/Responses/RepDispatchTaskGet";
import { RepDispatchTaskMerge } from "./commands/Dispatch/DispatchTask/Responses/RepDispatchTaskMerge";
import { RepFormResultDelete } from "./commands/Hosting/FormResults/Responses/RepFormResultDelete";
import { RepFormResultGet } from "./commands/Hosting/FormResults/Responses/RepFormResultGet";
import { RepFormResultMerge } from "./commands/Hosting/FormResults/Responses/RepFormResultMerge";
import { ParamFormField } from "./commands/Hosting/FormTemplates/Requests/Parameters/ParamFormField";
import { ParamFormTemplateMerge } from "./commands/Hosting/FormTemplates/Requests/Parameters/ParamFormTemplateMerge";
import { PayFormTemplate } from "./commands/Hosting/FormTemplates/Requests/PayFormTemplate";
import { PayFormTemplateBatchDelete } from "./commands/Hosting/FormTemplates/Requests/PayFormTemplateBatchDelete";
import { PayFormTemplateBatchMerge } from "./commands/Hosting/FormTemplates/Requests/PayFormTemplateBatchMerge";
import { PayFormTemplateDelete } from "./commands/Hosting/FormTemplates/Requests/PayFormTemplateDelete";
import { PayFormTemplateGet } from "./commands/Hosting/FormTemplates/Requests/PayFormTemplateGet";
import { PayFormTemplateList, PayFormTemplateListByCompany } from "./commands/Hosting/FormTemplates/Requests/PayFormTemplateList";
import { PayFormTemplateMerge } from "./commands/Hosting/FormTemplates/Requests/PayFormTemplateMerge";
import { PayFormTemplateRestore } from "./commands/Hosting/FormTemplates/Requests/PayFormTemplateRestore";
import { RepFormTemplateBatchDelete } from "./commands/Hosting/FormTemplates/Responses/RepFormTemplateBatchDelete";
import { RepFormTemplateBatchMerge } from "./commands/Hosting/FormTemplates/Responses/RepFormTemplateBatchMerge";
import { RepFormTemplateDelete } from "./commands/Hosting/FormTemplates/Responses/RepFormTemplateDelete";
import { RepFormTemplateGet } from "./commands/Hosting/FormTemplates/Responses/RepFormTemplateGet";
import { RepFormTemplateList, RepFormTemplateListByCompany } from "./commands/Hosting/FormTemplates/Responses/RepFormTemplateList";
import { RepFormTemplateMerge } from "./commands/Hosting/FormTemplates/Responses/RepFormTemplateMerge";
import { RepIconBatchDelete } from "./commands/Images/Icons/Responses/RepIconBatchDelete";
import { RepIconBatchMerge } from "./commands/Images/Icons/Responses/RepIconBatchMerge";
import { RepIconDelete } from "./commands/Images/Icons/Responses/RepIconDelete";
import { RepIconGet } from "./commands/Images/Icons/Responses/RepIconGet";
import { RepIconMerge } from "./commands/Images/Icons/Responses/RepIconMerge";
import { PayPicture } from "./commands/Images/Pictures/Requests/PayPicture";
import { PayPictureBatchDelete } from "./commands/Images/Pictures/Requests/PayPictureBatchDelete";
import { PayPictureBatchMerge } from "./commands/Images/Pictures/Requests/PayPictureBatchMerge";
import { PayPictureDelete } from "./commands/Images/Pictures/Requests/PayPictureDelete";
import { PayPictureGet } from "./commands/Images/Pictures/Requests/PayPictureGet";
import { PayPictureList, PayPictureListByCompany } from "./commands/Images/Pictures/Requests/PayPictureList";
import { PayPictureMerge } from "./commands/Images/Pictures/Requests/PayPictureMerge";
import { PayPictureRestore } from "./commands/Images/Pictures/Requests/PayPictureRestore";
import { RepPictureBatchDelete } from "./commands/Images/Pictures/Responses/RepPictureBatchDelete";
import { RepPictureBatchMerge } from "./commands/Images/Pictures/Responses/RepPictureBatchMerge";
import { RepPictureDelete } from "./commands/Images/Pictures/Responses/RepPictureDelete";
import { RepPictureGet } from "./commands/Images/Pictures/Responses/RepPictureGet";
import { RepPictureList, RepPictureListByCompany } from "./commands/Images/Pictures/Responses/RepPictureList";
import { RepPictureMerge } from "./commands/Images/Pictures/Responses/RepPictureMerge";
import { PayMaintenanceJob } from "./commands/Maintenance/Jobs/Requests/PayMaintenanceJob";
import { PayMaintenanceJobBatchDelete } from "./commands/Maintenance/Jobs/Requests/PayMaintenanceJobBatchDelete";
import { PayMaintenanceJobBatchMerge } from "./commands/Maintenance/Jobs/Requests/PayMaintenanceJobBatchMerge";
import { PayMaintenanceJobDelete } from "./commands/Maintenance/Jobs/Requests/PayMaintenanceJobDelete";
import { PayMaintenanceJobGet } from "./commands/Maintenance/Jobs/Requests/PayMaintenanceJobGet";
import { PayMaintenanceJobList, PayMaintenanceJobListByCompany } from "./commands/Maintenance/Jobs/Requests/PayMaintenanceJobList";
import { PayMaintenanceJobMerge } from "./commands/Maintenance/Jobs/Requests/PayMaintenanceJobMerge";
import { PayMaintenanceJobRestore } from "./commands/Maintenance/Jobs/Requests/PayMaintenanceJobRestore";
import { RepMaintenanceJobBatchDelete } from "./commands/Maintenance/Jobs/Responses/RepMaintenanceJobBatchDelete";
import { RepMaintenanceJobBatchMerge } from "./commands/Maintenance/Jobs/Responses/RepMaintenanceJobBatchMerge";
import { RepMaintenanceJobDelete } from "./commands/Maintenance/Jobs/Responses/RepMaintenanceJobDelete";
import { RepMaintenanceJobGet } from "./commands/Maintenance/Jobs/Responses/RepMaintenanceJobGet";
import { RepMaintenanceJobList, RepMaintenanceJobListByCompany } from "./commands/Maintenance/Jobs/Responses/RepMaintenanceJobList";
import { RepMaintenanceJobMerge } from "./commands/Maintenance/Jobs/Responses/RepMaintenanceJobMerge";
import { PayMaintenanceSchedule } from "./commands/Maintenance/Schedules/Requests/PayMaintenanceSchedule";
import { PayMaintenanceScheduleBatchDelete } from "./commands/Maintenance/Schedules/Requests/PayMaintenanceScheduleBatchDelete";
import { PayMaintenanceScheduleBatchMerge } from "./commands/Maintenance/Schedules/Requests/PayMaintenanceScheduleBatchMerge";
import { PayMaintenanceScheduleDelete } from "./commands/Maintenance/Schedules/Requests/PayMaintenanceScheduleDelete";
import { PayMaintenanceScheduleGet } from "./commands/Maintenance/Schedules/Requests/PayMaintenanceScheduleGet";
import { PayMaintenanceScheduleList, PayMaintenanceScheduleListByCompany } from "./commands/Maintenance/Schedules/Requests/PayMaintenanceScheduleList";
import { PayMaintenanceScheduleMerge } from "./commands/Maintenance/Schedules/Requests/PayMaintenanceScheduleMerge";
import { PayMaintenanceScheduleRestore } from "./commands/Maintenance/Schedules/Requests/PayMaintenanceScheduleRestore";
import { RepMaintenanceScheduleBatchDelete } from "./commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleBatchDelete";
import { RepMaintenanceScheduleBatchMerge } from "./commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleBatchMerge";
import { RepMaintenanceScheduleDelete } from "./commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleDelete";
import { RepMaintenanceScheduleGet } from "./commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleGet";
import { RepMaintenanceScheduleList, RepMaintenanceScheduleListByCompany } from "./commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleList";
import { RepMaintenanceScheduleMerge } from "./commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleMerge";
import { ParamPlaceMerge } from "./commands/Places/Requests/Parameters/ParamPlaceMerge";
import { PayPlace } from "./commands/Places/Requests/PayPlace";
import { PayPlaceBatchDelete } from "./commands/Places/Requests/PayPlaceBatchDelete";
import { PayPlaceBatchMerge } from "./commands/Places/Requests/PayPlaceBatchMerge";
import { PayPlaceDelete } from "./commands/Places/Requests/PayPlaceDelete";
import { PayPlaceGet } from "./commands/Places/Requests/PayPlaceGet";
import { PayPlaceList, PayPlaceListByCompany } from "./commands/Places/Requests/PayPlaceList";
import { PayPlaceMerge } from "./commands/Places/Requests/PayPlaceMerge";
import { PayPlaceRestore } from "./commands/Places/Requests/PayPlaceRestore";
import { RepPlaceBatchDelete } from "./commands/Places/Responses/RepPlaceBatchDelete";
import { RepPlaceBatchMerge } from "./commands/Places/Responses/RepPlaceBatchMerge";
import { RepPlaceDelete } from "./commands/Places/Responses/RepPlaceDelete";
import { RepPlaceGet } from "./commands/Places/Responses/RepPlaceGet";
import { RepPlaceList, RepPlaceListByCompany } from "./commands/Places/Responses/RepPlaceList";
import { RepPlaceMerge } from "./commands/Places/Responses/RepPlaceMerge";
import { ParamProviderConfigMerge } from "./commands/Providers/Configs/Requests/Parameters/ParamProviderConfigMerge";
import { PayProviderConfigBatchDelete } from "./commands/Providers/Configs/Requests/PayProviderConfigBatchDelete";
import { PayProviderConfigBatchMerge } from "./commands/Providers/Configs/Requests/PayProviderConfigBatchMerge";
import { PayProviderConfigDelete } from "./commands/Providers/Configs/Requests/PayProviderConfigDelete";
import { PayProviderConfigGet } from "./commands/Providers/Configs/Requests/PayProviderConfigGet";
import { PayProviderConfigList, PayProviderConfigListByCompany } from "./commands/Providers/Configs/Requests/PayProviderConfigList";
import { PayProviderConfigMerge } from "./commands/Providers/Configs/Requests/PayProviderConfigMerge";
import { PayProviderConfigRestore } from "./commands/Providers/Configs/Requests/PayProviderConfigRestore";
import { RepProviderConfigBatchDelete } from "./commands/Providers/Configs/Responses/RepProviderConfigBatchDelete";
import { RepProviderConfigBatchMerge } from "./commands/Providers/Configs/Responses/RepProviderConfigBatchMerge";
import { RepProviderConfigDelete } from "./commands/Providers/Configs/Responses/RepProviderConfigDelete";
import { RepProviderConfigGet } from "./commands/Providers/Configs/Responses/RepProviderConfigGet";
import { RepProviderConfigList, RepProviderConfigListByCompany } from "./commands/Providers/Configs/Responses/RepProviderConfigList";
import { RepProviderConfigMerge } from "./commands/Providers/Configs/Responses/RepProviderConfigMerge";
import { ParamProviderConfigurationMerge } from "./commands/Providers/Configurations/Requests/Parameters/ParamProviderConfigurationMerge";
import { PayProviderConfigurationBatchDelete } from "./commands/Providers/Configurations/Requests/PayProviderConfigurationBatchDelete";
import { PayProviderConfigurationBatchMerge } from "./commands/Providers/Configurations/Requests/PayProviderConfigurationBatchMerge";
import { PayProviderConfigurationDelete } from "./commands/Providers/Configurations/Requests/PayProviderConfigurationDelete";
import { PayProviderConfigurationGet } from "./commands/Providers/Configurations/Requests/PayProviderConfigurationGet";
import { PayProviderConfigurationList, PayProviderConfigurationListByCompany } from "./commands/Providers/Configurations/Requests/PayProviderConfigurationList";
import { PayProviderConfigurationMerge } from "./commands/Providers/Configurations/Requests/PayProviderConfigurationMerge";
import { PayProviderConfigurationRestore } from "./commands/Providers/Configurations/Requests/PayProviderConfigurationRestore";
import { RepProviderConfigurationBatchDelete } from "./commands/Providers/Configurations/Responses/RepProviderConfigurationBatchDelete";
import { RepProviderConfigurationBatchMerge } from "./commands/Providers/Configurations/Responses/RepProviderConfigurationBatchMerge";
import { RepProviderConfigurationDelete } from "./commands/Providers/Configurations/Responses/RepProviderConfigurationDelete";
import { RepProviderConfigurationGet } from "./commands/Providers/Configurations/Responses/RepProviderConfigurationGet";
import { RepProviderConfigurationList, RepProviderConfigurationListByCompany } from "./commands/Providers/Configurations/Responses/RepProviderConfigurationList";
import { RepProviderConfigurationMerge } from "./commands/Providers/Configurations/Responses/RepProviderConfigurationMerge";
import { PayProviderConfigurationTypeGet } from "./commands/Providers/ConfigurationTypes/Requests/PayProviderConfigurationTypeGet";
import { PayProviderConfigurationTypeList, PayProviderConfigurationTypeListByCompany } from "./commands/Providers/ConfigurationTypes/Requests/PayProviderConfigurationTypeList";
import { RepProviderConfigurationTypeGet } from "./commands/Providers/ConfigurationTypes/Responses/RepProviderConfigurationTypeGet";
import { RepProviderConfigurationTypeList, RepProviderConfigurationTypeListByCompany } from "./commands/Providers/ConfigurationTypes/Responses/RepProviderConfigurationTypeList";
import { PayProvider } from "./commands/Providers/Providers/Requests/PayProvider";
import { PayProviderAdvancedGet } from "./commands/Providers/Providers/Requests/PayProviderAdvancedGet";
import { PayProviderAdvancedList, PayProviderAdvancedListByCompany, PayProviderAdvancedListByConfig } from "./commands/Providers/Providers/Requests/PayProviderAdvancedList";
import { PayProviderBatchDelete } from "./commands/Providers/Providers/Requests/PayProviderBatchDelete";
import { PayProviderBatchMerge } from "./commands/Providers/Providers/Requests/PayProviderBatchMerge";
import { PayProviderControlGet } from "./commands/Providers/Providers/Requests/PayProviderControlGet";
import { PayProviderControlList, PayProviderControlListByCompany, PayProviderControlListByConfig } from "./commands/Providers/Providers/Requests/PayProviderControlList";
import { PayProviderDelete } from "./commands/Providers/Providers/Requests/PayProviderDelete";
import { PayProviderGeneralGet } from "./commands/Providers/Providers/Requests/PayProviderGeneralGet";
import { PayProviderGeneralList, PayProviderGeneralListByCompany, PayProviderGeneralListByConfig } from "./commands/Providers/Providers/Requests/PayProviderGeneralList";
import { PayProviderGet } from "./commands/Providers/Providers/Requests/PayProviderGet";
import { PayProviderList, PayProviderListByCompany } from "./commands/Providers/Providers/Requests/PayProviderList";
import { PayProviderMerge } from "./commands/Providers/Providers/Requests/PayProviderMerge";
import { PayProviderRestore } from "./commands/Providers/Providers/Requests/PayProviderRestore";
import { RepProviderControlListByConfig } from "./commands/Providers/Providers/Responses/RepProviderControlList";
import { RepProviderGeneralListByConfig } from "./commands/Providers/Providers/Responses/RepProviderGeneralList";
import { RepProviderListByConfig } from "./commands/Providers/Providers/Responses/RepProviderList";
import { RepProviderRegistrationGet } from "./commands/Providers/Registrations/Responses/RepProviderRegistrationGet";
import { RepProviderRegistrationList, RepProviderRegistrationListByCompany } from "./commands/Providers/Registrations/Responses/RepProviderRegistrationList";
import { RepProviderRegistrationMerge } from "./commands/Providers/Registrations/Responses/RepProviderRegistrationMerge";
import { ParamProviderScriptMerge } from "./commands/Providers/Scripts/Requests/Parameters/ParamProviderScriptMerge";
import { PayProviderScript } from "./commands/Providers/Scripts/Requests/PayProviderScript";
import { PayProviderScriptBatchDelete } from "./commands/Providers/Scripts/Requests/PayProviderScriptBatchDelete";
import { PayProviderScriptBatchMerge } from "./commands/Providers/Scripts/Requests/PayProviderScriptBatchMerge";
import { PayProviderScriptDelete } from "./commands/Providers/Scripts/Requests/PayProviderScriptDelete";
import { PayProviderScriptGet } from "./commands/Providers/Scripts/Requests/PayProviderScriptGet";
import { PayProviderScriptList, PayProviderScriptListByCompany } from "./commands/Providers/Scripts/Requests/PayProviderScriptList";
import { PayProviderScriptMerge } from "./commands/Providers/Scripts/Requests/PayProviderScriptMerge";
import { PayProviderScriptRestore } from "./commands/Providers/Scripts/Requests/PayProviderScriptRestore";
import { RepProviderScriptBatchDelete } from "./commands/Providers/Scripts/Responses/RepProviderScriptBatchDelete";
import { RepProviderScriptBatchMerge } from "./commands/Providers/Scripts/Responses/RepProviderScriptBatchMerge";
import { RepProviderScriptDelete } from "./commands/Providers/Scripts/Responses/RepProviderScriptDelete";
import { RepProviderScriptGet } from "./commands/Providers/Scripts/Responses/RepProviderScriptGet";
import { RepProviderScriptList, RepProviderScriptListByCompany } from "./commands/Providers/Scripts/Responses/RepProviderScriptList";
import { RepProviderScriptMerge } from "./commands/Providers/Scripts/Responses/RepProviderScriptMerge";
import { ParamReportScheduleMerge } from "./commands/Reports/Schedules/Requests/Parameters/ParamReportScheduleMerge";
import { PayReportScheduleDelete } from "./commands/Reports/Schedules/Requests/PayReportScheduleDelete";
import { PayReportScheduleRestore } from "./commands/Reports/Schedules/Requests/PayReportScheduleRestore";
import { RepReportScheduleBatchDelete } from "./commands/Reports/Schedules/Responses/RepReportScheduleBatchDelete";
import { RepReportScheduleDelete } from "./commands/Reports/Schedules/Responses/RepReportScheduleDelete";
import { RepReportScheduleGet } from "./commands/Reports/Schedules/Responses/RepReportScheduleGet";
import { RepReportScheduleList, RepReportScheduleListByCompany } from "./commands/Reports/Schedules/Responses/RepReportScheduleList";
import { RepReportScheduleMerge } from "./commands/Reports/Schedules/Responses/RepReportScheduleMerge";
import { ParamReportTemplateMerge } from "./commands/Reports/Templates/Requests/Parameters/ParamReportTemplateMerge";
import { PayReportTemplate } from "./commands/Reports/Templates/Requests/PayReportTemplate";
import { PayReportTemplateBatchDelete } from "./commands/Reports/Templates/Requests/PayReportTemplateBatchDelete";
import { PayReportTemplateBatchMerge } from "./commands/Reports/Templates/Requests/PayReportTemplateBatchMerge";
import { PayReportTemplateDelete } from "./commands/Reports/Templates/Requests/PayReportTemplateDelete";
import { PayReportTemplateGet } from "./commands/Reports/Templates/Requests/PayReportTemplateGet";
import { PayReportTemplateList, PayReportTemplateListByCompany } from "./commands/Reports/Templates/Requests/PayReportTemplateList";
import { PayReportTemplateMerge } from "./commands/Reports/Templates/Requests/PayReportTemplateMerge";
import { PayReportTemplateRestore } from "./commands/Reports/Templates/Requests/PayReportTemplateRestore";
import { RepReportTemplateBatchDelete } from "./commands/Reports/Templates/Responses/RepReportTemplateBatchDelete";
import { RepReportTemplateBatchMerge } from "./commands/Reports/Templates/Responses/RepReportTemplateBatchMerge";
import { RepReportTemplateDelete } from "./commands/Reports/Templates/Responses/RepReportTemplateDelete";
import { RepReportTemplateGet } from "./commands/Reports/Templates/Responses/RepReportTemplateGet";
import { RepReportTemplateList, RepReportTemplateListByCompany } from "./commands/Reports/Templates/Responses/RepReportTemplateList";
import { RepReportTemplateMerge } from "./commands/Reports/Templates/Responses/RepReportTemplateMerge";
import { SubscriptionType } from "./commands/WebSocket/Requests/Parameters/SubscriptionType";
import { PaySubscriptionList } from "./commands/WebSocket/Requests/PaySubscriptionList";
import { PaySubscriptionMerge } from "./commands/WebSocket/Requests/PaySubscriptionMerge";
import { PaySubscriptionRemove } from "./commands/WebSocket/Requests/PaySubscriptionRemove";
import { Subscription } from "./commands/WebSocket/Responses/Content/Subscription";
import { RepSubscription } from "./commands/WebSocket/Responses/RepSubscription";
import { RepSubscriptionList } from "./commands/WebSocket/Responses/RepSubscriptionList";


/**
 * Version number for this release.
 */
export const version = 5.05;

//#region API
/**
 * Command request payloads and parameter classes.
 */
export {
	ParamCode,
	ParamGuid,
	ParamId,
	ParamIdentifier,
	ParamKey,
	ParamLogin,
	ParamMerge,
	ParamMergeSubscribable,
	Payload,
	type ActionType,
	type IParamAsset,
	type IParamBillingProfile,
	type IParamCompany,
	type IPayListByAsset,
	type IPayListByCompany,
	type IPayListByDate,
	type IPayListById,
	type IPayListByKey,
	type IPayListByLabels,
	type IPayListByReferences,
	type IPayListByUser,
	type IPaySingle
};
/**
 * Command responses and content classes.
 */
	export {
		ContentCode,
		ContentCodeCompany,
		ContentCodeDeleted, ContentId, ContentIdAsset, ContentIdBillingProfile, ContentIdCompany, ContentIdCompanyTemplate, ContentIdendifier, ContentIdendifierAsset, ContentIdendifierCompany, ContentIdendifierDeleted, ContentIdendifierSuspended,
		ContentIdParent, ContentIdScript, ContentIdSuspended, ContentKey, ContentKeyCompany, ContentKeyDeleted, ContentLogin, ContentLoginCompany, ContentLoginDeleted, ContentParentDeleted, Reply,
		type IRepList,
		type IRepListByAsset,
		type IRepListByCompany,
		type IRepListByDate,
		type IRepListById,
		type IRepListByKey,
		type IRepListByLabels,
		type IRepListByReferences,
		type IRepListByUser
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
		ErrorDetailUserGroupInUse
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
	ParamContactMerge,
	ParamHandle,
	ParamMachineMerge,
	ParamPermission,
	ParamSelfContactMerge,
	ParamUserGroupMerge,
	ParamUserMerge,
	PayContact,
	PayContactBatchDelete,
	PayContactBatchMerge,
	PayContactDelete,
	PayContactGet,
	PayContactList,
	PayContactListByCompany,
	PayContactMerge,
	PayContactRestore,
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
	PayUserAdvancedListByGroup,
	PayUserBatchDelete,
	PayUserBatchMerge,
	PayUserDelete,
	PayUserGeneralGet,
	PayUserGeneralListByCompany,
	PayUserGeneralListByGroup,
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
	RepContactBatchDelete,
	RepContactBatchMerge,
	RepContactDelete,
	RepContactGet,
	RepContactList,
	RepContactListByCompany,
	RepContactMerge, RepMachineBatchDelete,
	RepMachineBatchMerge,
	RepMachineDelete,
	RepMachineGet,
	RepMachineListByCompany,
	RepMachineMerge,
	RepSelfContact,
	RepSelfGet,
	RepSelfLogout,
	RepSelfPassword,
	RepSelfPreferences,
	RepUserAdvancedGet,
	RepUserAdvancedListByCompany,
	RepUserAdvancedListByGroup,
	RepUserBatchDelete,
	RepUserBatchMerge,
	RepUserDelete,
	RepUserGeneralGet,
	RepUserGeneralListByCompany,
	RepUserGeneralListByGroup,
	RepUserGet,
	RepUserGroupBatchDelete,
	RepUserGroupBatchMerge,
	RepUserGroupDelete,
	RepUserGroupGet,
	RepUserGroupListByCompany,
	RepUserGroupMerge,
	RepUserListByCompany,
	RepUserMerge,
	SessionHandle
};
//#endregion Accounts

//#region Assets
	export {
		ParamAssetMerge,
		PayAsset,
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
		PayAssetSuspend,
		RepAssetAdvancedGet,
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
		RepAssetSuspend
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
		PayBehaviourLogListByCompany,
		PayBehaviourMerge,
		PayBehaviourRestore,
		PayBehaviourScript,
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
		RepBehaviourLogListByCompany,
		RepBehaviourMerge,
		// Scripts Responses
		RepBehaviourScriptBatchDelete,
		RepBehaviourScriptBatchMerge,
		RepBehaviourScriptDelete,
		RepBehaviourScriptGet,
		RepBehaviourScriptList,
		RepBehaviourScriptListByCompany,
		RepBehaviourScriptMerge
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
		RepCompanyStylesListByCompanyAndRefPairs
	};
//#endregion Company

//#region Dispatch
	export {
		// DispatchJob Requests
		PayDispatchJob,
		PayDispatchJobBatchDelete,
		PayDispatchJobBatchMerge,
		PayDispatchJobDelete,
		PayDispatchJobGet,
		PayDispatchJobMerge,
		PayDispatchJobRestore,
		// DispatchTask Requests
		PayDispatchTask,
		PayDispatchTaskBatchDelete,
		PayDispatchTaskBatchMerge,
		PayDispatchTaskDelete,
		PayDispatchTaskGet,
		PayDispatchTaskMerge,
		PayDispatchTaskRestore,
		// DispatchJob Responses
		RepDispatchJobBatchDelete,
		RepDispatchJobBatchMerge,
		RepDispatchJobDelete,
		RepDispatchJobGet,
		RepDispatchJobMerge,
		// DispatchTask Responses
		RepDispatchTaskBatchDelete,
		RepDispatchTaskBatchMerge,
		RepDispatchTaskDelete,
		RepDispatchTaskGet,
		RepDispatchTaskMerge
	};
//#endregion Dispatch

//#region Hosting
	export {
		// FormTemplates Parameters
		ParamFormField,
		ParamFormTemplateMerge,
		// FormTemplates Requests
		PayFormTemplate,
		PayFormTemplateBatchDelete,
		PayFormTemplateBatchMerge,
		PayFormTemplateDelete,
		PayFormTemplateGet,
		PayFormTemplateList,
		PayFormTemplateListByCompany,
		PayFormTemplateMerge,
		PayFormTemplateRestore,
		// FormResults Responses
		RepFormResultDelete,
		RepFormResultGet,
		RepFormResultMerge,
		// FormTemplates Responses
		RepFormTemplateBatchDelete,
		RepFormTemplateBatchMerge,
		RepFormTemplateDelete,
		RepFormTemplateGet,
		RepFormTemplateList,
		RepFormTemplateListByCompany,
		RepFormTemplateMerge
	};
//#endregion Hosting

//#region Images
	export {
		// Pictures Requests
		PayPicture,
		PayPictureBatchDelete,
		PayPictureBatchMerge,
		PayPictureDelete,
		PayPictureGet,
		PayPictureList,
		PayPictureListByCompany,
		PayPictureMerge,
		PayPictureRestore,
		// Icons Responses
		RepIconBatchDelete,
		RepIconBatchMerge,
		RepIconDelete,
		RepIconGet,
		RepIconMerge,
		// Pictures Responses
		RepPictureBatchDelete,
		RepPictureBatchMerge,
		RepPictureDelete,
		RepPictureGet,
		RepPictureList,
		RepPictureListByCompany,
		RepPictureMerge
	};
//#endregion Images

//#region Maintenance
	export {
		// Jobs Requests
		PayMaintenanceJob,
		PayMaintenanceJobBatchDelete,
		PayMaintenanceJobBatchMerge,
		PayMaintenanceJobDelete,
		PayMaintenanceJobGet,
		PayMaintenanceJobList,
		PayMaintenanceJobListByCompany,
		PayMaintenanceJobMerge,
		PayMaintenanceJobRestore,
		// Schedules Requests
		PayMaintenanceSchedule,
		PayMaintenanceScheduleBatchDelete,
		PayMaintenanceScheduleBatchMerge,
		PayMaintenanceScheduleDelete,
		PayMaintenanceScheduleGet,
		PayMaintenanceScheduleList,
		PayMaintenanceScheduleListByCompany,
		PayMaintenanceScheduleMerge,
		PayMaintenanceScheduleRestore,
		// Jobs Responses
		RepMaintenanceJobBatchDelete,
		RepMaintenanceJobBatchMerge,
		RepMaintenanceJobDelete,
		RepMaintenanceJobGet,
		RepMaintenanceJobList,
		RepMaintenanceJobListByCompany,
		RepMaintenanceJobMerge,
		// Schedules Responses
		RepMaintenanceScheduleBatchDelete,
		RepMaintenanceScheduleBatchMerge,
		RepMaintenanceScheduleDelete,
		RepMaintenanceScheduleGet,
		RepMaintenanceScheduleList,
		RepMaintenanceScheduleListByCompany,
		RepMaintenanceScheduleMerge
	};
//#endregion Maintenance

//#region Places
	export {
		// Requests Parameters
		ParamPlaceMerge,
		// Requests
		PayPlace,
		PayPlaceBatchDelete,
		PayPlaceBatchMerge,
		PayPlaceDelete,
		PayPlaceGet,
		PayPlaceList,
		PayPlaceListByCompany,
		PayPlaceMerge,
		PayPlaceRestore,
		// Responses
		RepPlaceBatchDelete,
		RepPlaceBatchMerge,
		RepPlaceDelete,
		RepPlaceGet,
		RepPlaceList,
		RepPlaceListByCompany,
		RepPlaceMerge
	};
//#endregion Places

//#region Providers
	export {
		// Providers Configs
		ParamProviderConfigMerge,
		// Providers Configurations
		ParamProviderConfigurationMerge,
		// Scripts Requests Parameters
		ParamProviderScriptMerge,
		// Providers PayProvider and related classes
		PayProvider,
		PayProviderAdvancedGet,
		PayProviderAdvancedList,
		PayProviderAdvancedListByCompany,
		PayProviderAdvancedListByConfig,
		PayProviderBatchDelete,
		PayProviderBatchMerge,
		PayProviderConfigBatchDelete,
		PayProviderConfigBatchMerge,
		PayProviderConfigDelete,
		PayProviderConfigGet,
		PayProviderConfigList,
		PayProviderConfigListByCompany,
		PayProviderConfigMerge,
		PayProviderConfigRestore,
		PayProviderConfigurationBatchDelete,
		PayProviderConfigurationBatchMerge,
		PayProviderConfigurationDelete,
		PayProviderConfigurationGet,
		PayProviderConfigurationList,
		PayProviderConfigurationListByCompany,
		PayProviderConfigurationMerge,
		PayProviderConfigurationRestore,
		// Providers ConfigurationTypes
		PayProviderConfigurationTypeGet,
		PayProviderConfigurationTypeList,
		PayProviderConfigurationTypeListByCompany,
		PayProviderControlGet,
		PayProviderControlList,
		PayProviderControlListByCompany,
		PayProviderControlListByConfig,
		PayProviderDelete,
		PayProviderGeneralGet,
		PayProviderGeneralList,
		PayProviderGeneralListByCompany,
		PayProviderGeneralListByConfig,
		PayProviderGet,
		PayProviderList,
		PayProviderListByCompany,
		PayProviderMerge,
		PayProviderRestore,
		// Scripts Requests
		PayProviderScript,
		PayProviderScriptBatchDelete,
		PayProviderScriptBatchMerge,
		PayProviderScriptDelete,
		PayProviderScriptGet,
		PayProviderScriptList,
		PayProviderScriptListByCompany,
		PayProviderScriptMerge,
		PayProviderScriptRestore,
		RepProviderConfigBatchDelete,
		RepProviderConfigBatchMerge,
		RepProviderConfigDelete,
		RepProviderConfigGet,
		RepProviderConfigList,
		RepProviderConfigListByCompany,
		RepProviderConfigMerge,
		RepProviderConfigurationBatchDelete,
		RepProviderConfigurationBatchMerge,
		RepProviderConfigurationDelete,
		RepProviderConfigurationGet,
		RepProviderConfigurationList,
		RepProviderConfigurationListByCompany,
		RepProviderConfigurationMerge,
		RepProviderConfigurationTypeGet,
		RepProviderConfigurationTypeList,
		RepProviderConfigurationTypeListByCompany,
		RepProviderControlListByConfig,
		RepProviderGeneralListByConfig,
		// Providers Config/Configuration classes
		RepProviderListByConfig,
		// Registrations Requests Parameters (if any)
		// Registrations Requests (none found in grep)
		// Registrations Responses
		// (No BatchDelete, BatchMerge, or Delete found for Registrations Responses)
		RepProviderRegistrationGet,
		RepProviderRegistrationList,
		RepProviderRegistrationListByCompany,
		RepProviderRegistrationMerge,
		// Scripts Responses
		RepProviderScriptBatchDelete,
		RepProviderScriptBatchMerge,
		RepProviderScriptDelete,
		RepProviderScriptGet,
		RepProviderScriptList,
		RepProviderScriptListByCompany,
		RepProviderScriptMerge
	};
//#endregion Providers

//#region Reports
	export {
		// Schedules Requests Parameters
		ParamReportScheduleMerge,
		// Templates Requests Parameters
		ParamReportTemplateMerge,
		// Schedules Requests
		PayReportScheduleDelete,
		PayReportScheduleRestore,
		// Templates Requests
		PayReportTemplate,
		PayReportTemplateBatchDelete,
		PayReportTemplateBatchMerge,
		PayReportTemplateDelete,
		PayReportTemplateGet,
		PayReportTemplateList,
		PayReportTemplateListByCompany,
		PayReportTemplateMerge,
		PayReportTemplateRestore,
		RepReportScheduleBatchDelete,
		// Schedules Requests Parameters (if any)
		// Schedules Requests (none found in grep)
		// Schedules Responses
		RepReportScheduleDelete,
		RepReportScheduleGet,
		RepReportScheduleList,
		RepReportScheduleListByCompany,
		RepReportScheduleMerge,
		// Templates Responses
		RepReportTemplateBatchDelete,
		RepReportTemplateBatchMerge,
		RepReportTemplateDelete,
		RepReportTemplateGet,
		RepReportTemplateList,
		RepReportTemplateListByCompany,
		RepReportTemplateMerge
	};
//#endregion Reports

//#region WebSocket
	export {
		PaySubscriptionList,
		PaySubscriptionMerge,
		PaySubscriptionRemove,
		// Responses
		RepSubscription,
		RepSubscriptionList,
		// Content
		Subscription,
		// Requests
		SubscriptionType
	};
//#endregion WebSocket
