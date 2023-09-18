import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function HomeCarousel() {
 

    const  {arrImg}  = useSelector(state => state.CarouselReducer)
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(getCarouselAction())
    },[])
    
    

    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} className="opacity-0"  alt={item.hinhAnh} />
                </div>
            </div>
        })
    }
    return (
        <Carousel effect="fade" style={{ width: '100%', padding: 0, margin: 0 }} >
              {renderImg()}
        </Carousel>
    )
}