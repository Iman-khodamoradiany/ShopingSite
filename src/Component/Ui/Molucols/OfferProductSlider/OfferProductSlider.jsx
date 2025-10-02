import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import GetQueryRequest from '../../../../core/Services/Query/GetAllProduct/api'
import ProducCard from '../ProductCard/ProductCard'
import { useEffect, useState } from 'react'
import Button from '../../Atom/Button/Button'
import Icon from '../../Atom/Icon/Icon'

function OfferProductSlider({ swiperRef }) {

    const [OfferProduct, setOfferProduct] = useState([]);
    const query = GetQueryRequest()

    useEffect(() => {
        if (query.data?.data) {
            setOfferProduct(query.data.data.filter(item => item.Offer))
        }
    }, [query.data])

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            slidesPerView={4}
            spaceBetween={20}
        >
            {OfferProduct.length > 0 && OfferProduct.map((item) => (
                <SwiperSlide key={item.id}>
                    <ProducCard item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default OfferProductSlider
