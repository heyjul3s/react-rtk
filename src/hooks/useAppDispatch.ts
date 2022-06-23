import { useDispatch } from 'react-redux';
import type { AnyAction } from '@reduxjs/toolkit';
import type { ThunkDispatch } from 'redux-thunk';
import type { ReduxState } from '../store';

export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<TypedDispatch>();
