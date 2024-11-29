import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  chat: {
    headerHeight: '58px',
    chatHeaderHeight: '80px'
  },
  colorSchemes: { },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#dcdde1'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset': { borderWidth: '0.5px' },
          '&:hover fieldset': { borderWidth: '2px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1px' }
        }
      }
    }
  }
})

export default theme
