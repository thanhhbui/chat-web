import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as chatLogo } from '~/assets/chat-lock.svg'
import SvgIcon from '@mui/icons-material/Apps'
import { Typography } from '@mui/material'
import Workspaces from './Menus/Workspaces'
import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profiles'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      // backgroundColor: 'primary.light',
      height: (theme) => theme.chat.headerHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX: 'auto'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={chatLogo} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }} >Groot</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex', gap: 1 } }}>
          <Workspaces />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{ minWidth: '120px' }}/> */}
        <ModeSelect />

        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }} >
            <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }}/>
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar