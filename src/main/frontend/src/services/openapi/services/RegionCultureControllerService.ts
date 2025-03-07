/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntryDTO } from '../models/EntryDTO';
import type { PageInfo } from '../models/PageInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import {Page} from "../models/Page";
export class RegionCultureControllerService {
    /**
     * @param regionId
     * @param cultureId
     * @returns string OK
     * @throws ApiError
     */
    public static addRegionCultureRelation(
        regionId: number,
        cultureId: number,
    ): CancelablePromise<'100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED'> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/regions/{regionId}/culture/{cultureId}',
            path: {
                'regionId': regionId,
                'cultureId': cultureId,
            },
        });
    }
    /**
     * @param regionId
     * @param cultureId
     * @returns string OK
     * @throws ApiError
     */
    public static deleteRegionCultureRelation(
        regionId: number,
        cultureId: number,
    ): CancelablePromise<'100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED'> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/regions/{regionId}/culture/{cultureId}',
            path: {
                'regionId': regionId,
                'cultureId': cultureId,
            },
        });
    }
    /**
     * @param regionId
     * @param requestBody
     * @returns EntryDTO OK
     * @throws ApiError
     */
    public static addNewCultureRegionRelation(
        regionId: number,
        requestBody: EntryDTO,
    ): CancelablePromise<EntryDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/regions/{regionId}/culture',
            path: {
                'regionId': regionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param cultureId
     * @param requestBody
     * @returns EntryDTO OK
     * @throws ApiError
     */
    public static addNewRegionCultureRegion(
        cultureId: number,
        requestBody: EntryDTO,
    ): CancelablePromise<EntryDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/regions/culture/{cultureId}',
            path: {
                'cultureId': cultureId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param name
     * @param pageInfo
     * @returns Page<EntryDTO> OK
     * @throws ApiError
     */
    public static getCulturesRelatedToRegion(
        name: string,
        pageInfo?: PageInfo,
    ): CancelablePromise<Page<EntryDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/regions/{name}/culture',
            path: {
                'name': name,
            },
            query: {
                'number': pageInfo?.number,
                'size': pageInfo?.size
            },
        });
    }
    /**
     * @param name
     * @param pageInfo
     * @returns Page<EntryDTO> OK
     * @throws ApiError
     */
    public static getRegionsRelatedToCulture(
        name: string,
        pageInfo?: PageInfo,
    ): CancelablePromise<Page<EntryDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/regions/culture/{name}',
            path: {
                'name': name,
            },
            query: {
                'number': pageInfo?.number,
                'size': pageInfo?.size
            },
        });
    }
}
