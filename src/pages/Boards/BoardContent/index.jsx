import Box from '@mui/material/Box'
import Chats from '~/pages/Sidebar/Chats'
import ChatContent from '~/pages/Sidebar/ChatContent'

function BoardContent() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.chat.headerHeight})`,
      backgroundColor: ( theme ) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      display: 'flex',
      alignItems: 'center'
    }}>
      <Chats />
      <ChatContent />
    </Box>
  )
}

export default BoardContent