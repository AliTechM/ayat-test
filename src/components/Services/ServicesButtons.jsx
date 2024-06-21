import { Person , LocationCity ,VolunteerActivism,ListAlt } from '@mui/icons-material';
import { Stack,Box  } from '@mui/material';
import CustomButton from '../Common/CustomButton';
export default function ServicesButtons(){
return(
<Stack 
direction="row"
justifyContent="center"
alignItems="center"
spacing={'2vw'}
mb={4}
mt={2}
>
 <CustomButton
    variant="contained"
    backgroundColor="#e7e9ef"
    buttonColor="#a4afb7"
    iconHoverColor="#3b86ff"
    hoverColor="#ffffff"
    visitedColor="#ffffff"
    icon={<Person />}
    iconPosition="middle">         
  </CustomButton>
  <Box sx={{ height: '25px', width: '2px', backgroundColor: '#e7e9ef', alignSelf: 'center' }} />

  <CustomButton
    variant="contained"
    backgroundColor="#e7e9ef"
    buttonColor="#a4afb7"
    iconHoverColor="#3b86ff"
    hoverColor="#ffffff"
    visitedColor="#ffffff"
    icon={<LocationCity />}
    iconPosition="middle">         
  </CustomButton>
  <Box sx={{ height: '25px', width: '2px', backgroundColor: '#e7e9ef', alignSelf: 'center' }} />
  <CustomButton
    variant="contained"
    backgroundColor="#e7e9ef"
    buttonColor="#a4afb7"
    iconHoverColor="#3b86ff"
    hoverColor="#ffffff"
    visitedColor="#ffffff"
    icon={<VolunteerActivism />}
    iconPosition="middle">         
  </CustomButton>
  <Box sx={{ height: '25px', width: '2px', backgroundColor: '#e7e9ef', alignSelf: 'center' }} />
  <CustomButton
    variant="contained"
    backgroundColor="#e7e9ef"
    buttonColor="#a4afb7"
    iconHoverColor="#3b86ff"
    hoverColor="#ffffff"
    visitedColor="#ffffff"
    icon={<ListAlt />}
    iconPosition="middle">         
  </CustomButton>
  </Stack>
)
}
