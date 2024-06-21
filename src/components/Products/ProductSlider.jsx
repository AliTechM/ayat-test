import Slider from 'react-slick';
import { Box, Typography, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImg from '../../assets/slide.png';
import LinedHeader from '../Common/LinedHeader';
import SideButton from '../Common/SideButton';
// Styled components
const SliderContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  marginTop: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  paddingTop: '20px',
  boxShadow: '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)'
});

const ProductCard = styled(Card)({
  width: '95% !important',
  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '15px',
  marginTop: '6px'
});

const ProductCardMedia = styled(CardMedia)({
  height: '140px',
});

const ProductCardContent = styled(CardContent)({
  textAlign: 'center',
  backgroundColor: '#ebf3ff'
});
const DeleteButton = styled(IconButton)({
  position: 'absolute',
  top: '10px',
  right: '10px',
  color: '#999',
});

const EditButton = styled(IconButton)({
  position: 'absolute',
  top: '10px',
  left: '10px',
  color: '#999',
});



const products = [
  {
    image: slideImg,
    name: 'Lorem ipsum dolor',
  },
  {
    image: slideImg,
    name: 'Lorem ipsum dolor',
  },
  {
    image: slideImg,
    name: 'Lorem ipsum dolor',
  },
  {
    image: slideImg,
    name: 'Lorem ipsum dolor',
  },
  {
    image: slideImg,
    name: 'Lorem ipsum dolor',
  },
  {
    image: slideImg,
    name: 'Lorem ipsum dolor',
  },
  {
    image: slideImg,
    name: 'Lorem ipsum dolor',
  }
];

const ArrowButton = styled(IconButton)(({ position, right }) => ({
  position: 'absolute',
  top: '-50px',
  zIndex: 10,
  backgroundColor: 'transparent',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#a4afb7',
  },
  [position]: right,
}));

const CustomNextArrow = ({ onClick }) => {
  return (
    <ArrowButton onClick={onClick} position="right" right='5%' >
      <ChevronRightIcon color='primary' />
    </ArrowButton>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <ArrowButton onClick={onClick} position="right" right='10%'>
      <ChevronLeftIcon color='primary' />
    </ArrowButton>
  );
};





const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <SliderContainer>
     <LinedHeader text='Products'/>
    
    <SideButton dir='left'>
    <AddIcon />
    </SideButton>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductCardMedia
              component="img"
              image={product.image}
              alt={product.name}
            />
            <ProductCardContent>
              <Typography variant="body2" color="textPrimary" component="p" sx={{ textAlign: 'left' }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="primary" sx={{ textAlign: 'left' }}>
                Available
              </Typography>
            </ProductCardContent>
            <EditButton>
              <EditIcon color='primary' />
            </EditButton>
            <DeleteButton>
              <DeleteIcon color='primary' />
            </DeleteButton>
          </ProductCard>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ProductSlider;
