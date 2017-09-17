import * as Utils from './../utils';

export class QueryParamsExtractor {
    constructor(private paramRefs: { name: string, index: number }[], private data: any[]) {
    }

    extract(): { [param: string]: string | number | any[] } {
        if (!this.paramRefs) {
            return {};
        }
        let result: { [param: string]: string | number } = {};
        this.paramRefs.forEach(ref => {
            const val = this.data[ref.index];
            if (Utils.isSimple(val) || Utils.isArray(val)) {
                result[ref.name] = val;
            } else if (Utils.isObject(val)) {
                result = Object.assign(result, val);
            }
        });

        return result;
    }
}