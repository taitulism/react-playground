import {createContext} from 'react';
import type {AppStore} from './app-store';

export const AppCtx = createContext<AppStore>({} as AppStore);
