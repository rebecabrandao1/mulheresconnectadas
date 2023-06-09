import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ab4f9d',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      
      
      <StackColumn style={{color:'white'}}>
        <FooterTitle style={{color:'white'}} text={'Nossas soluções'} /> 
        <FooterLink style={{color:'white'}} text={'Trilhas de curso'} />
        <FooterLink style={{color:'white'}} text={'Prototipação descomplicada'} />
        <FooterLink style={{color:'white'}} text={'Quiz'} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'Visão geral'} />
        <FooterLink text={'Entre em contato conosco'} />
        <FooterLink text={'Cadastre-se'} />
        <FooterLink text={'Conheça as ISGs '} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Mulheres conectadas'} style={{color:'white'}} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        
        >
          
          <Link href="https://www.facebook.com/mulheresconnectadas/" variant="body2" 
          sx={{
            color: 'white',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="https://www.instagram.com/mulheresconnectadas/"variant="body2" 
          sx={{
            color: 'white',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
          <Link href="https://www.linkedin.com/company/mulheresconnectadas/" variant="body2" sx={{color:'white'}}>
            <LinkedInIcon />
          </Link>
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        color='white'
        >
          &copy; 2023 tst
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer