import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme, iConHover, hovercolor, visitedcolor, bgcolor, btnColor,btwidth,bthieght }) => ({
  backgroundColor: bgcolor || theme.palette.primary.main,
  color: btnColor || theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  paddingBottom:0,
  width:btwidth||60,
  height:bthieght||45,
  minWidth:'unset',
  '&:hover': {
    backgroundColor: hovercolor || theme.palette.primary.dark,
    color: iConHover || theme.palette.primary.main,
  },
  '&:visited': {
    backgroundColor: visitedcolor || theme.palette.primary.main,
    color: iConHover || theme.palette.primary.main,
  },
}));

const CustomButton = ({ children, icon, iconPosition , buttonColor, backgroundColor, iconHoverColor, hoverColor, visitedColor,width,height,onClick, ...props }) => {
  const renderContent = () => {
    if (iconPosition === 'middle') {
      return (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <span >{children}</span>
          <span >{icon}</span>
         
        </span>
      );
    }
    return (
      <>
        {icon && iconPosition === 'start' && <span style={{ marginRight: 5 }}>{icon}</span>}
        {children}
        {icon && iconPosition === 'end' && <span style={{ marginLeft: 5 }}>{icon}</span>}
      </>
    );
  };

  return (
    <StyledButton
      bgcolor={backgroundColor}
      btnColor={buttonColor}
      iConHover={iconHoverColor}
      hovercolor={hoverColor}
      visitedcolor={visitedColor}
      bthieght={height}
      btwidth={width}
      onClick={onClick}
      {...props}
    >
      {renderContent()}
    </StyledButton>
  );
};

export default CustomButton;
