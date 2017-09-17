import 'reflect-metadata';
import { Observable } from 'rxjs';

import { RequestMethod } from './request-method';

import { EntryPoint } from './decorators/entrypoint';
import { QueryString } from './decorators/query-string';
import { DataString } from './decorators/data-string';

import { Requestor } from './requestor';

import { ParametersPackMethod, QueryParamsPacketSettings } from './types';
import { currentMethodName, extractMetadata, ExtractedMetadata } from './decorators/helpers';
import { QueryParamsExtractor, DataParamsExtractor } from './extractors';

export abstract class BaseApi {

    protected abstract get entry(): string;

    protected abstract get headers(): { [param: string]: string };

    protected abstract pathBuilder(path: string, queryParams: { [param: string]: string | number | any[] }): string;

    protected abstract dataBuilder(data: Object): any;

    private requestor: Requestor;

    constructor(private providerType) {
        this.requestor = new this.providerType();
    }

    protected process(args): Observable<any> {
        let meta = extractMetadata(this, currentMethodName(args));
        const qParams = new QueryParamsExtractor(meta.queryStringList, args).extract();
        const dParams = new DataParamsExtractor(meta.dataStringList, args).extract();

        const prePath = this.processPathTemplate(meta.resource, qParams);
        return this.requestor.request(meta.method, this.entry + this.pathBuilder(prePath, qParams), this.dataBuilder(dParams), this.headers);
    }

    private processPathTemplate(resource: string, queryParams: { [param: string]: string | number | any[] }) {
        return resource.replace(/\{(\w+)\}/g, (match, paramName) => {
            let val = queryParams[paramName];
            if (!val) {
                throw Error('Missing template var: \'' + paramName + '\'');
            }
            delete queryParams[paramName];
            return <string>val;
        });
    }
}