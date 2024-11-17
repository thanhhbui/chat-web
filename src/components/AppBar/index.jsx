import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as chatLogo } from '~/assets/chat-lock.svg'
import SvgIcon from '@mui/icons-material/Apps'
import { Typography } from '@mui/material'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      backgroundColor: 'primary.light',
      height: (theme) => theme.chat.headerHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={chatLogo} inheritViewBox />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold' }} >Groot</Typography>
        </Box>
      </Box>

      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar