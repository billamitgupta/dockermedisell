
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 
// import {value} from '../component/Footer';

// Import Swiper styles
import '../../src/style/slidercomponent.css';
import 'swiper/css/pagination';

import 'swiper/css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function slidercompont() {
  return (
    <>
      <div >
      {/* {console.log(value)} */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Card sx={{ maxWidth: 300,  margin:5,}}>
        
        <CardMedia
          sx={{ height: 200, width: 120, marginLeft:5,}}
          image="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png"
          title="green iguana" className='image'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Elderly Care
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Therat your elders one's with care and <span className='spann'>Medisell</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card></SwiperSlide>
        <SwiperSlide><Card sx={{ maxWidth: 300,  margin:5,}}>
        
        <CardMedia
          sx={{ height: 200, width: 120, marginLeft:5,}}
          image="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png"
          title="green iguana" className='image'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Elderly Care
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Therat your elders one's with care and <span className='spann'>Medisell</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card></SwiperSlide>
        <SwiperSlide><Card sx={{ maxWidth: 300, maxHeight: 500,  margin:5,}}>
      <CardMedia
        sx={{ height: 180, width: 200, marginLeft:1,}}
        image="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png"
        title="green iguana" className='image'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medicine
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Get your medicine in bulk at awesome price and discount 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></SwiperSlide>
        <SwiperSlide>   <SwiperSlide><Card sx={{ maxWidth: 300, maxHeight: 500,  margin:5,}}>
      <CardMedia
        sx={{ height: 180, width: 200, marginLeft:1,}}
        image="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png"
        title="green iguana" className='image'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medicine
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Get your medicine in bulk at awesome price and discount 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></SwiperSlide></SwiperSlide>
        <SwiperSlide>   <SwiperSlide><Card sx={{ maxWidth: 300, maxHeight: 500,  margin:5,}}>
      <CardMedia
        sx={{ height: 180, width: 200, marginLeft:1,}}
        image="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png"
        title="green iguana" className='image'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medicine
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Get your medicine in bulk at awesome price and discount 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></SwiperSlide></SwiperSlide>
        <SwiperSlide>   <SwiperSlide><Card sx={{ maxWidth: 300, maxHeight: 500,  margin:5,}}>
      <CardMedia
        sx={{ height: 180, width: 200, marginLeft:1,}}
        image="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png"
        title="green iguana" className='image'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medicine
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Get your medicine in bulk at awesome price and discount 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></SwiperSlide></SwiperSlide>
        <SwiperSlide>   <SwiperSlide><Card sx={{ maxWidth: 300, maxHeight: 500,  margin:5,}}>
      <CardMedia
        sx={{ height: 180, width: 200, marginLeft:1,}}
        image="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png"
        title="green iguana" className='image'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medicine
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Get your medicine in bulk at awesome price and discount 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></SwiperSlide></SwiperSlide>
        <SwiperSlide>   <SwiperSlide><Card sx={{ maxWidth: 300, maxHeight: 500,  margin:5,}}>
      <CardMedia
        sx={{ height: 180, width: 200, marginLeft:1,}}
        image="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png"
        title="green iguana" className='image'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medicine
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Get your medicine in bulk at awesome price and discount 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></SwiperSlide></SwiperSlide>
        <SwiperSlide>   <SwiperSlide><Card sx={{ maxWidth: 300, maxHeight: 500,  margin:5,}}>
      <CardMedia
        sx={{ height: 180, width: 200, marginLeft:1,}}
        image="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png"
        title="green iguana" className='image'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medicine
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Get your medicine in bulk at awesome price and discount 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></SwiperSlide></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
