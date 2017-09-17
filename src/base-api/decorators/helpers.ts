import 'reflect-metadata';

import { entrypointSymbol, EntrypointMetadata } from './entrypoint';
import { queryStringSymbol } from './query-string';
import { dataStringSymbol } from './data-string';

import { RequestMethod } from './../request-method';

export function currentMethodName(args) {
    return args.length ? args[args.length - 1] : undefined;
}

export interface ExtractedMetadata {
    method: RequestMethod;
    resource: string;
    dataStringList: { name: string, index: number }[];
    queryStringList: { name: string, index: number}[];
}

export function extractMetadata(target: any, propertyKey: string): ExtractedMetadata {
    let ep: EntrypointMetadata = Reflect.getMetadata(entrypointSymbol, target, propertyKey);
    return {
        method: ep.method,
        resource: ep.resource,
        dataStringList: Reflect.getMetadata(dataStringSymbol, target, propertyKey),
        queryStringList: Reflect.getMetadata(queryStringSymbol, target, propertyKey)
    };
}