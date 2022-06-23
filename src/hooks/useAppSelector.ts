import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { ReduxState } from '../store';

export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
