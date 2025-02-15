import Box from '@mui/material/Box'
import Chats from '~/pages/Main/MainContent/Chats'
import ChatContent from '~/pages/Main/MainContent/ChatContent'
import { useState } from 'react'
import { Typography } from '@mui/material'

function MainContent({ group, chat, users }) {
  const [selectedUser, setSelectedUser] = useState(null)

  const handleSelectUser = ( user ) => {
    setSelectedUser(user)
  }

  return (
    <Box sx={{
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.chat.headerHeight})`,
      backgroundColor: ( theme ) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      display: 'flex',
      alignItems: 'center'
    }}>
      <Chats users={ users } onSelectUser={ handleSelectUser } />
      {
        selectedUser ? (
          <ChatContent user={selectedUser} chat={chat}/>
        ) : (
          <Box sx={{ width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6">Select a chat to start messaging</Typography>
          </Box>
        )
      }
    </Box>
  )
}

export default MainContent