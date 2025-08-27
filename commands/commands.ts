/**
 * Object definitions that work with our various APIs.
 * {@link https://github.com/trakitwireless/trakit-ts-commands|TypeScript documentation.}
 * Last updated on Thu Feb 27 2025 11:59:01 
 * @copyright Trak-iT Wireless Inc. 2025
 */

import { TrakitCommander } from "clients/TrakitCommander";
import { ErrorCode } from "./API/Responses/Errors/ErrorCode";
import { TrakitObjectCommander } from "clients/TrakitObjectCommander";


/**
 * Version number for this release.
 */
export const version = 5.0;

export default {
    version,

    clients: {
        TrakitCommander,
        TrakitObjectCommander
    },
    //#region Accounts
    //#endregion Accounts
    
    //#region API
    //#endregion API

    //#region Assets
    ErrorCode,
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
};