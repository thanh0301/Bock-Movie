import React,{useEffect} from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useSelector, useDispatch } from 'react-redux'
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapActions';
export default function Home(props) {
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        const action = layDanhSachPhimAction();
        dispatch(action);//dispatch function từ thunk
        dispatch(layDanhSachHeThongRapAction());
    },[])
    return (
        <div>
            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto " >
                    <MultipleRowSlick arrFilm={arrFilm}/>
                </div>
            </section>
            <div className="mx-36">
                <HomeMenu  heThongRapChieu={heThongRapChieu}/>
            </div>
        </div>
    )
}