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
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// import { Skeleton } from '@mui/material';

function Card1(){
    return(
      <div className='div'>
        <Grid container spacing={6}>
        <Grid xs={4} md={4}> 
        <div>
 
        <Card sx={{ maxWidth: 150,  margin:5,}}>
      <CardMedia
        sx={{ height: 150, width: 150, marginLeft:5,}}
        image="https://assets.truemeds.in/Images/dwebbanner1.jpeg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724"
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
    </Card>
    </div>
    </Grid>
        <Grid xs={4} md={4}> 
        <div>
        <Card sx={{ maxWidth: 300,  margin:5,}}>
        
      <CardMedia
        sx={{ height: 200, width: 300, marginLeft:5,}}
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
    </Card>
    </div>
    </Grid>
        <Grid xs={4} md={4}> 
        <div>
        <Card sx={{ maxWidth: 300,  margin:5,}}>
      <CardMedia
        sx={{ height: 200, width: 300, marginLeft:5,}}
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
    </Card>
    </div>
    </Grid>
        <Grid xs={4} md={4}> 
        <div>
        <Card sx={{ maxWidth: 300,  margin:5,}}>
      <CardMedia
        sx={{ height: 200, width: 300, marginLeft:5,}}
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
    </Card>
    </div>
    </Grid>
    </Grid>
    </div>

    );
}
export default Card1