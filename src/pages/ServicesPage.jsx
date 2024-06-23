import { Grid } from '@mui/material';
import ContactCard from '../components/ContactCard/ContactCard';
import ProductSlider from '../components/Products/ProductSlider';
import ServicesTable from '../components/Services/servicestable';
import ServicesButtons from '../components/Services/ServicesButtons';

const ServicesPage = () => {
  return (
    <Grid  container  sx={{ mt: 2 }}>
    <Grid  item xs={12} md={8} sx={{ mb: 3 }}>
      <ServicesButtons />
      <ServicesTable />
      <ProductSlider />
    </Grid>
    <Grid item xs={0} md={1}></Grid>
    <Grid item xs={12} md={3} sx={{ mb: 3 }}>
      <ContactCard />
    </Grid>
  </Grid>
  );
};

export default ServicesPage;
