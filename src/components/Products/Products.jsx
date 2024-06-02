import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css";
import Product from './components/Product';

export default function Products() {
  return (
    <div className='Container-Products flex flex-col h-screen overflow-x-hidden justify-center'>
      <div className='container m-auto w-2/3 text-center'>
        <h3 className='text-white text-3xl xl:text-6xl mb-28'>PRODUCTOS DESTACADOS</h3>
        <Swiper
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
          className='product-list'
        >
          <SwiperSlide>
            <Product 
              titulo='Casco de Bicicleta Aerodinámico Pro'
              imagen='https://static.vecteezy.com/system/resources/thumbnails/021/909/467/small_2x/old-bike-helmet-png.png'
              precio={100}
              descripcion='El Casco de Bicicleta Aerodinámico Pro combina seguridad y rendimiento. Con su diseño avanzado y materiales ligeros, ofrece una protección superior sin comprometer la velocidad. Las múltiples ventilaciones aseguran una excelente circulación de aire, manteniéndote fresco en todo momento. Perfecto para ciclistas profesionales y aficionados que buscan lo mejor en equipamiento de ciclismo.'
              descuento={10}
              id='1'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product 
              titulo='Luces LED para Bicicleta Nocturna'
              imagen='https://i.ibb.co/P9LcpCq/luces-led-para-bicicleta-usb-recargables-gadnic1-10dc7b443da200c4ad16917733506029-480-0-removebg-pre.png'
              precio={200}
              descripcion='Las Luces LED para Bicicleta Nocturna garantizan máxima visibilidad y seguridad en tus paseos nocturnos. Con diferentes modos de iluminación y una batería de larga duración, estas luces son esenciales para cualquier ciclista. Fáciles de instalar y resistentes al agua, te acompañarán en todas tus aventuras, brindándote la confianza para rodar de noche.'
              descuento={20}
              id='2'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product 
              titulo='Guantes de Ciclismo Antideslizantes'
              imagen='https://i.ibb.co/1QrwvTY/png-clipart-giro-d-italia-cycling-glove-cycling-glove-bicycle-cycling-removebg-preview.png'
              precio={300}
              descripcion='Los Guantes de Ciclismo Antideslizantes ofrecen un agarre superior y confort en cada recorrido. Fabricados con materiales transpirables y acolchado estratégico, estos guantes reducen la fatiga y protegen tus manos. Ideales para largas jornadas de ciclismo, proporcionan una excelente adherencia al manillar en cualquier condición climática.'
              descuento={30}
              id='3'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product 
              titulo='Cámara de Aire Resistente a Pinchazos'
              imagen='https://i.ibb.co/xLcG9TP/b98529257272-removebg-preview.png'
              precio={400}
              descripcion='La Cámara de Aire Resistente a Pinchazos es tu mejor aliada contra los terrenos difíciles. Diseñada con tecnología avanzada, esta cámara reduce significativamente el riesgo de pinchazos, asegurando que tus viajes sean más seguros y sin interrupciones. Compatible con la mayoría de las bicicletas, es fácil de instalar y te permitirá disfrutar de tus rutas con total tranquilidad.'
              descuento={40}
              id='4'
              ultimo={true}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
