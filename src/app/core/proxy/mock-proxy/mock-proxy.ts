import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

import { HttpProxy } from '../http-proxy/http-proxy';
import * as Mock from 'mockjs';

export interface ProxyOption {
    url?: string;
    mockJson?: string;
    mockJs?: string;
    method?: string;
    options?: {
        body?: any;
        headers?: HttpHeaders;
        observe?: string;
        params?: HttpParams;
        responseType?: string;
        reportProgress?: boolean;
        withCredentials?: boolean;
    };
}

@Injectable()
export class MockProxy extends HttpProxy {

    ajax(options: ProxyOption) {

        let mock = true;
        let apiPrefix = "";

        if (options.url && options.url.indexOf('http') !== 0) {
            options.url = `${this.host}/${apiPrefix}/${options.url}`;
        }

        if (mock && options.mockJson) {
            options.url = options.mockJson;
            options.method = 'GET';

        } else if (mock && options.mockJs && typeof Mock !== 'undefined') {

            let output;
            const urlKey = options.mockJs + (options.method || 'GET');

            // tslint:disable-next-line:forin
            for (const key in Mock._mocked) {
                const v = Mock._mocked[key];
                if (urlKey.indexOf(key) > -1) {
                    output = Mock.mock(v.template);
                    break;
                }
            }

            const headers: any = (options.options || {}).headers;
            const response = new Response({
                body: output,
                headers: headers,
                status: 200,
                url: options.url,
                merge: opt => response
            });

            const promise = new Promise((resolve, reject) => {
                resolve(response);
            });
            return promise;
        }

        return this.request(options.method, options.url, options.options).toPromise();
    }
}
