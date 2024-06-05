import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Importa el módulo Autoplay
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import "./style.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Importa el CSS del Autoplay

import Product from './components/Product';

function CustomNextButton({ goNext }) {
  return (
    <button className='boton-sig' onClick={goNext}>
      <FontAwesomeIcon icon={faChevronRight} className="icono" />
    </button>
  );
}

function CustomPrevButton({ goPrev }) {
  return (
    <button className='boton-ant' onClick={goPrev}>
      <FontAwesomeIcon icon={faChevronLeft} className="icono" />
    </button>
  );
}

export default function Products({ produtos, titulo }) {
  const swiperRef = React.useRef(null);

  return (
    <div className='Container-Products flex flex-col justify-center'>
      <div className='container m-auto w-2/3 text-center relative'>
        <h3 className='text-white text-3xl xl:text-6xl mb-28'>{titulo}</h3>
        <Swiper
          modules={[Navigation, Autoplay]} 
          breakpoints={{
            320: {
              slidesPerView: 1,

            },
            640: {
              slidesPerView: 2,

            },
            1024: {
              slidesPerView: 3,
     
            }
          }}
          autoplay={{
            delay: 4400,
            disableOnInteraction: false,
          }}

          className='product-list'
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {produtos.map((producto) => (
            <SwiperSlide key={producto.id}>
              <Product 
                titulo={producto.titulo}
                imagen={producto.imagen}
                precio={producto.precio}
                descripcion={producto.descripcion}
                descuento={producto.descuento}
                id={producto.id}
                primero={producto.primero}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <CustomPrevButton goPrev={() => swiperRef.current.slidePrev()} />
        <CustomNextButton goNext={() => swiperRef.current.slideNext()} />
      </div>
    </div>
  )
}