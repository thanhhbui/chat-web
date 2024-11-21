import { Box, TextField, Tooltip, Typography } from '@mui/material'
import List from '@mui/material/List'
import ChatItem from '~/components/Chats/ChatItem'
import GroupAddIcon from '@mui/icons-material/GroupAdd'


function Chats() {
  return (
    <Box sx={{ width: '30%', height: '100%', backgroundColor: 'primary.light', marginLeft: '10px', borderRadius: '12px', display: { xs: 'none', md: 'flex', gap: 1 }, flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '95%', height: (theme) => theme.chat.chatHeaderHeight, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='h4' sx={{ color: 'primary.dark' }}>Chats</Typography>
          <Tooltip title="Group">
            <GroupAddIcon sx={{ cursor: 'pointer', fontSize: 40, color: 'primary.dark' }}/>
          </Tooltip>
        </Box>
        <TextField variant="outlined" id="outlined-search" label="Search..." type="search" size='small'
          sx={{
            minWidth: '120px', width: '100%',
            '& .MuiInputLabel-root': {
              color: 'inherit'
            },
            '& .MuiOutlinedInput-root': {
              color: 'inherit',
              '& fieldset': {
                borderColor: 'inherit'
              },
              '&:hover fieldset': {
                borderColor: 'inherit'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'inherit'
              }
            }
          }}
        />
      </Box>
      <List sx={{ overflow: 'auto', width: '95%', height: (theme) => `calc(100% - ${theme.chat.chatHeaderHeight})`, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', borderRadius: '12px', margin: '10px' }}>
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