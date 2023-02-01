import {Usuario} from '../interface/appInterfaces';

export interface AuthState {
  status: 'checking' | 'authenticated' | 'notAuthenticated';
  token: string | null;
  errorMessage: string;
  user: Usuario | null;
}

type AuthAction =
  | {type: 'signUp'; payload: {token: string; user: Usuario}}
  | {type: 'addError'; payload: string}
  | {type: 'removeError'}
  | {type: 'notAuthenticated'}
  | {type: 'logout'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        user: null,
        token: null,
        status: 'notAuthenticated',
        errorMessage: action.payload,
      };

    case 'removeError':
      return {
        ...state,
        errorMessage: '',
      };

    case 'signUp':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user,
      };

    case 'logout':
    case 'notAuthenticated':
      return {
        ...state,
        status: 'notAuthenticated',
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
