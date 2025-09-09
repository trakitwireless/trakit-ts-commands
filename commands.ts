/**
 * Object definitions that work with our various APIs.
 * {@link https://github.com/trakitwireless/trakit-ts-commands|TypeScript documentation.}
 * Last updated on Thu Feb 27 2025 11:59:01 
 * @copyright Trak-iT Wireless Inc. 2025
 */
import { TrakitCommander } from "clients/TrakitCommander";
import { IParamAsset } from "commands/API/Requests/Parameters/IParamAsset";
import { IParamBillingProfile } from "commands/API/Requests/Parameters/IParamBillingProfile";
import { IParamCompany } from "commands/API/Requests/Parameters/IParamCompany";
import { ParamCode } from "commands/API/Requests/Parameters/ParamCode";
import { ParamGuid } from "commands/API/Requests/Parameters/ParamGuid";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { ParamIdentifier } from "commands/API/Requests/Parameters/ParamIdentifier";
import { ParamKey } from "commands/API/Requests/Parameters/ParamKey";
import { ParamLogin } from "commands/API/Requests/Parameters/ParamLogin";
import { ParamMerge } from "commands/API/Requests/Parameters/ParamMerge";
import { ParamMergeSubscribable } from "commands/API/Requests/Parameters/ParamMergeSubscribable";
import { Payload } from "commands/API/Requests/Payload";
import { ContentCode } from "commands/API/Responses/Content/ContentCode";
import { ContentCodeCompany } from "commands/API/Responses/Content/ContentCodeCompany";
import { ContentCodeDeleted } from "commands/API/Responses/Content/ContentCodeDeleted";
import { ContentId } from "commands/API/Responses/Content/ContentId";
import { ContentIdAsset } from "commands/API/Responses/Content/ContentIdAsset";
import { ContentIdBillingProfile } from "commands/API/Responses/Content/ContentIdBillingProfile";
import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { ContentIdCompanyTemplate } from "commands/API/Responses/Content/ContentIdCompanyTemplate";
import { ContentIdendifier } from "commands/API/Responses/Content/ContentIdendifier";
import { ContentIdendifierAsset } from "commands/API/Responses/Content/ContentIdendifierAsset";
import { ContentIdendifierCompany } from "commands/API/Responses/Content/ContentIdendifierCompany";
import { ContentIdendifierDeleted } from "commands/API/Responses/Content/ContentIdendifierDeleted";
import { ContentIdendifierSuspended } from "commands/API/Responses/Content/ContentIdendifierSuspended";
import { ContentIdParent } from "commands/API/Responses/Content/ContentIdParent";
import { ContentIdScript } from "commands/API/Responses/Content/ContentIdScript";
import { ContentIdSuspended } from "commands/API/Responses/Content/ContentIdSuspended";
import { ContentKey } from "commands/API/Responses/Content/ContentKey";
import { ContentKeyCompany } from "commands/API/Responses/Content/ContentKeyCompany";
import { ContentKeyDeleted } from "commands/API/Responses/Content/ContentKeyDeleted";
import { ContentLogin } from "commands/API/Responses/Content/ContentLogin";
import { ContentLoginCompany } from "commands/API/Responses/Content/ContentLoginCompany";
import { ContentLoginDeleted } from "commands/API/Responses/Content/ContentLoginDeleted";
import { ContentParentDeleted } from "commands/API/Responses/Content/ContentParentDeleted";
import { ErrorDetail } from "commands/API/Responses/Errors/ErrorDetail";
import { ErrorDetailBadIds } from "commands/API/Responses/Errors/ErrorDetailBadIds";
import { ErrorDetailBadIndexes } from "commands/API/Responses/Errors/ErrorDetailBadIndexes";
import { ErrorDetailBadKeys } from "commands/API/Responses/Errors/ErrorDetailBadKeys";
import { ErrorDetailBatch } from "commands/API/Responses/Errors/ErrorDetailBatch";
import { ErrorDetailContactInUse } from "commands/API/Responses/Errors/ErrorDetailContactInUse";
import { ErrorDetailCount } from "commands/API/Responses/Errors/ErrorDetailCount";
import { ErrorDetailEnum } from "commands/API/Responses/Errors/ErrorDetailEnum";
import { ErrorDetailEscalation } from "commands/API/Responses/Errors/ErrorDetailEscalation";
import { ErrorDetailExternals } from "commands/API/Responses/Errors/ErrorDetailExternals";
import { ErrorDetailFormTemplateInUse } from "commands/API/Responses/Errors/ErrorDetailFormTemplateInUse";
import { ErrorDetailInput } from "commands/API/Responses/Errors/ErrorDetailInput";
import { ErrorDetailLocked } from "commands/API/Responses/Errors/ErrorDetailLocked";
import { ErrorDetailMinMax } from "commands/API/Responses/Errors/ErrorDetailMinMax";
import { ErrorDetailParent } from "commands/API/Responses/Errors/ErrorDetailParent";
import { ErrorDetailParse } from "commands/API/Responses/Errors/ErrorDetailParse";
import { ErrorDetailPhone } from "commands/API/Responses/Errors/ErrorDetailPhone";
import { ErrorDetailSecret } from "commands/API/Responses/Errors/ErrorDetailSecret";
import { ErrorDetailStack } from "commands/API/Responses/Errors/ErrorDetailStack";
import { ErrorDetailThrottled } from "commands/API/Responses/Errors/ErrorDetailThrottled";
import { ErrorDetailType } from "commands/API/Responses/Errors/ErrorDetailType";
import { ErrorDetailUserGroupInUse } from "commands/API/Responses/Errors/ErrorDetailUserGroupInUse";
import { IRepList } from "commands/API/Responses/IRepList";
import { IRepListByAsset } from "commands/API/Responses/IRepListByAsset";
import { IRepListByCompany } from "commands/API/Responses/IRepListByCompany";
import { IRepListByDate } from "commands/API/Responses/IRepListByDate";
import { IRepListById } from "commands/API/Responses/IRepListById";
import { IRepListByKey } from "commands/API/Responses/IRepListByKey";
import { IRepListByLabels } from "commands/API/Responses/IRepListByLabels";
import { IRepListByReferences } from "commands/API/Responses/IRepListByReferences";
import { IRepListByUser } from "commands/API/Responses/IRepListByUser";
import { Reply } from "commands/API/Responses/Reply";
import { ROUTE_DECODE, ROUTE_ENCODE } from "./commands/API/Geography/Polyline"
import { TrakitObjectCommander } from "./clients/TrakitObjectCommander";
import { ErrorCode } from "./commands/API/Responses/Errors/ErrorCode";


/**
 * Version number for this release.
 */
export const version = 5.03;

/**
 * Abstract command execution classes.
 */
export {
    TrakitCommander,
    TrakitObjectCommander
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
