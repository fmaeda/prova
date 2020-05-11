// @flow
import axios from 'axios';
import { Store } from 'redux';
import { RootState } from 'store';
import { History } from 'history';
import { authActions } from 'store/auth';
// import { tokenActions } from 'store/token';
// import { serverActions } from 'store/server';

const extractErro = (response: any) => {
  if (!response || !response.data || !response.data.erro) {
    return 'UNKNOWN_SERVER_ERROR';
  }

  const {
    data: { erro },
  } = response;

  if (response.request.responseType === 'arraybuffer') {
    return JSON.parse(Buffer.from(response.data).toString('utf8')).erro;
  }
  return erro;
};

export default (store: Store<RootState>, history: History) => {
  axios.interceptors.response.use(
    (resp) => {
      const { headers } = resp;
      if (headers) {
        const token = headers['x-auth-token'];
        if (token) {
          store.dispatch(authActions.setToken(token));
        }

        const serverDate = headers['x-server-date'];
        if (serverDate) {
          store.dispatch(authActions.updateClientTimeDiff(serverDate));
        }
      }
      return resp;
    },
    (error) => {
      const erro = extractErro(error.response);
      if (error.response) {
        const {
          status,
          request: { responseURL },
        } = error.response;

        const url = responseURL as string;
        if (status === 401) {
          if (
            ((url.indexOf('/s/inscricao/') >= 0 &&
              url.indexOf('/s/inscricao/iniciar') === -1) ||
              url.indexOf('/s/ac/') >= 0) &&
            erro === 'CAPTCHA_EXPIROU'
          ) {
            history.push('/nao-autorizado');
          }
        } else if (status === 403) {
          history.push('/inscricoes-encerradas');
        }
      }
      return Promise.reject(erro);
    },
  );
  axios.interceptors.request.use(
    (config) => ({
      ...config,
      headers: {
        ...config.headers,
        'x-auth-token': store.getState().auth.token,
      },
    }),
    (error) => Promise.reject(error),
  );
};
