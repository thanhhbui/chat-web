import { Box, InputAdornment, SvgIcon, TextField, Tooltip, Typography } from '@mui/material'
import List from '@mui/material/List'
import ChatItem from '~/components/Chats/ChatItem'
// import GroupAddIcon from '@mui/icons-material/GroupAdd'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { ReactComponent as GroupIcon } from '~/assets/group.svg'
import { useState } from 'react'

function Chats() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box sx={{ 
      width: '30%',
      height: 'calc(100% - 20px)',
      margin: '10px 0px 10px 10px',
      borderRadius: '12px',
      display: { xs: 'none', md: 'flex', gap: 1 },
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: ( theme ) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '95%', height: (theme) => theme.chat.chatHeaderHeight, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold' }}>Chats</Typography>
          <Tooltip title="Group">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <SvgIcon component={GroupIcon} inheritViewBox fontSize='large' sx={{ cursor: 'pointer', color: 'white' }} />
            </div>
          </Tooltip>
        </Box>
        <TextField
          variant="outlined"
          id="outlined-search"
          label="Search..."
          type="text"
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon fontSize='small'
                sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                onClick={() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: '120px', width: '100%',
            '& label': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& input': { color: 'white' },

            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
        />
      </Box>
      <List sx={{ overflow: 'auto', width: '95%', height: (theme) => `calc(100% - ${theme.chat.chatHeaderHeight})`, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', borderRadius: '12px', marginTop: '18px', marginBottom: '18px', padding: '0px' }}>
        <ChatItem name='thanhbui' date='Jan 9, 2014'/>
        <ChatItem name='Nguyễn Huy Hoàng' date='Jan 7, 2014'/>
        <ChatItem name='m' date='July 20, 2014'/>
        <ChatItem name='thanhbui' date='Jan 9, 2014'/>
        <ChatItem name='Nguyễn Huy Hoàng' date='Jan 7, 2014'/>
        <ChatItem name='m' date='July 20, 2014'/>
        <ChatItem name='thanhbui' date='Jan 9, 2014'/>
        <ChatItem name='Nguyễn Huy Hoàng' date='Jan 7, 2014'/>
        <ChatItem name='m' date='July 20, 2014'/>
        <ChatItem name='thanhbui' date='Jan 9, 2014'/>
        <ChatItem name='Nguyễn Huy Hoàng' date='Jan 7, 2014'/>
        <ChatItem name='m' date='July 20, 2014'/>
        <ChatItem name='thanhbui' date='Jan 9, 2014'/>
        <ChatItem name='Nguyễn Huy Hoàng' date='Jan 7, 2014'/>
        <ChatItem name='m' date='July 20, 2014'/>
        <ChatItem name='thanhbui' date='Jan 9, 2014'/>
        <ChatItem name='Nguyễn Huy Hoàng' date='Jan 7, 2014'/>
        <ChatItem name='m' date='July 20, 2014'/>
        <ChatItem name='thanhbui' date='Jan 9, 2014'/>
        <ChatItem name='Nguyễn Huy Hoàng' date='Jan 7, 2014'/>
        <ChatItem name='m2' date='July 20, 2014'/>
      </List>
    </Box>
  )
}

export default Chats