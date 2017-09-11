import 'reflect-metadata';
import { Observable } from 'rxjs';

import { RequestMethod } from './request-method';

import { EntryPoint } from './decorators/entrypoint';
import { QueryString } from './decorators/query-string';
import { DataString } from './decorators/data-string';

import { currentMethodName, extractMetadata, ExtractedMetadata } from './decorators/helpers';

export abstract class BaseApi {

    protected abstract get entry(): string;

    protected abstract get headers(): { [param: string]: string };

    protected process(args): Observable<any> {
        let meta = extractMetadata(this, currentMethodName(args));
        let params = this.buildDataTables(meta, args);
        let path = this.buildQuery(meta.resource, params.queryString);
        return this.request(meta.method, path, params.dataString);
    }

    private buildDataTables(meta: ExtractedMetadata, data: any[]): {
        queryString: { [param: string]: string | number },
        dataString: { [param: string]: string | number }
    } {
        let transformMeta = (list: { name: string, index: number }[]) => {
            if (!list)
                return {};
            let result: { [param: string]: string | number | Object } = {};
            list.forEach(x => {
                if (x.name && typeof data[x.index] === 'object') {
                    let obj: { [param: string]: string | number } = {};
                    for (let prop in data[x.index]) {
                        obj[prop] = data[x.index][prop];
                    }
                    result[x.name] = obj;
                }
                else if (x.name) {
                    result[x.name] = data[x.index];
                } else if (typeof data[x.index] === 'object') {
                    for (let prop in data[x.index]) {
                        result[prop] = data[x.index][prop];
                    }
                }
            });
            return result;
        }
        return { queryString: transformMeta(meta.queryStringList), dataString: transformMeta(meta.dataStringList) };
    }

    private request(
        method: RequestMethod,
        path: string,
        dataString: { [param: string]: string | number } = {}): Observable<any> {

        return Observable
            .ajax({ method: method, url: this.entry + path, body: dataString, headers: this.headers, responseType: 'json' })
            .map(r => r.response);
    }

    private buildQuery(resource: string, queryStringVars: { [param: string]: string | number }): string {
        let nonTempParams = queryStringVars;
        let path = resource.replace(/\{(\w+)\}/g, (match, paramName) => {
            let val = queryStringVars[paramName];
            if (!val)
                throw Error('Missing template var: \'' + paramName + '\'');
            delete nonTempParams[paramName];
            return <string>val;
        });

        Object.keys(nonTempParams)
            .filter(x => nonTempParams[x] === null)
            .forEach(x => delete nonTempParams[x]);

        if (Object.keys(nonTempParams).length) {
            return path + '?' + encodeURI(Object.keys(nonTempParams)
                .map(x => x + '=' + nonTempParams[x])
                .join('&'));
        } else {
            return path;
        }

    }
}