import { applyMiddleware, combineReducers,createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyDatVeReducer } from "./reducers/QuanLyDatVeReducer";

const rootReducer = combineReducers({
    CarouselReducer:CarouselReducer,
    QuanLyPhimReducer:QuanLyPhimReducer,
    QuanLyRapReducer:QuanLyRapReducer,
    QuanLyNguoiDungReducer:QuanLyNguoiDungReducer,
    QuanLyDatVeReducer:QuanLyDatVeReducer   

})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store