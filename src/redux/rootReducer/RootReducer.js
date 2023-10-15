import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// slices
import taskSlice from '../slices/taskSlice'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  task: taskSlice,
});

export default persistReducer(persistConfig, rootReducer);