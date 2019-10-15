import config from './config';
import { GenerateOptions } from './types';

const qs: any = {};

export const generateOptions: GenerateOptions = ({
  method, path, query, body, withAuth = config.defaultWithAuth, file = false, error,
  headers = {}, upload,
}) => {
  const _headers = headers;
  let _body: any;

  if (!upload) {
    _headers['Content-Type'] = 'application/json';
    _body = JSON.stringify(body);
  }

  return {
    path: `someurl/${path}${query ? `?${qs.stringify(query, { encode: false })}` : ''}`,
    options: {
      method,
      headers: _headers,
      body: _body,
    },
    file,
    errorConfig: error,
    withAuth,
  };
};
