
import axios from 'axios'
import { DOMAIN } from '../../util/settings/config';
import { SET_CAROUSEL } from '../typeAction/CarouselType';
import {quanLyPhimService} from '../../services/QuanLyPhimService';

export const getCarouselAction = () => {

    return async (dispatch) => {
        try {
                // const results = await axios({
           //     url:`${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
            //     method:'GET'
                
            // });

            // const results1 = await axios.get(`${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`)
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layDanhSachBanner();

             dispatch({
                 type:SET_CAROUSEL,
                 arrImg:result.data.content
             })
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}
