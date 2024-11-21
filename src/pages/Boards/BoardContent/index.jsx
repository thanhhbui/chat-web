import Box from '@mui/material/Box'
import Chats from '~/pages/Sidebar/Chats'
import ChatContent from '~/pages/Sidebar/ChatContent'

function BoardContent() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.chat.headerHeight})`,
      // backgroundColor: 'primary.light',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Chats />
      <ChatContent />
    </Box>
  )
}

export default BoardContent