import { Box, SvgIcon, TextField, Tooltip } from '@mui/material'
import { ReactComponent as Phone } from '~/assets/phone.svg'
import { ReactComponent as Video } from '~/assets/video.svg'
import { ReactComponent as More } from '~/assets/more.svg'
import ChatItem from '~/components/Chats/ChatItem'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import SendIcon from '@mui/icons-material/Send'
import Message from '~/components/Chats/Message'
import { useState } from 'react'

function ChatContent({ user, chat }) {
  // chatContent - hiển thị nội dung chính của những đoạn chat
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState(chat)

  const handleSendToChat = () => {
    if (message.trim() !== '') {
      const newMessage = {
        _id: new Date().getTime(), // Temporary ID
        participant: 'sender',
        message,
        avatar: 'https://i.pinimg.com/564x/15/a2/c1/15a2c1eeb335985509fb44d7e39e073a.jpg' // cần sửa thành avatar của account hiện tại
      }
      setMessages([...messages, newMessage])
      setMessage('')
    }
  }

  return (
    <Box sx={{
      width: { xs: '100%', md: '70%' },
      height: (theme) => `calc(100vh - ${theme.chat.headerHeight} - 20px)`,
      backgroundColor: ( theme ) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
      borderRadius: '6px',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* title đoạn chat - người nhận */}
      <Box sx={{ width: '100%', height: (theme) => theme.chat.chatHeaderHeight }}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ ml: '10px' }}>
            <ChatItem key={user._id} name={user.name} avatar={user.avatar} status={user.status} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '8px 16px', gap: 2 }}>
            <Tooltip title="Call">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SvgIcon component={Phone} inheritViewBox fontSize='medium' sx={{ borderRadius: '50', cursor: 'pointer', color: 'dark' }} />
              </div>
            </Tooltip>
            <Tooltip title="Video Call">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SvgIcon component={Video} inheritViewBox fontSize='large' sx={{ borderRadius: '50', cursor: 'pointer', color: 'dark' }} />
              </div>
            </Tooltip>
            <Tooltip title="More">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SvgIcon component={More} inheritViewBox fontSize='large' sx={{ borderRadius: '50', cursor: 'pointer', color: 'dark' }} />
              </div>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      {/* phần hiển thị nội dung đoạn chat */}
      <Box sx={{ width: '100%', height: (theme) => `calc(100% - ${theme.chat.chatHeaderHeight})`, backgroundColor: '#fff', overflow: 'auto' }}>
        {
          messages.map((item) => <Message key={item._id} username={item.name} avatar={item.avatar} message={item.message} participant={item.Participant} />)
        }
      </Box>
      {/* phần box gửi tin nhắn */}
      <Box sx={{ width: '100%', height: (theme) => theme.chat.chatHeaderHeight }}>
        <Box sx={{ width: '100%', height: (theme) => `calc(${theme.chat.chatHeaderHeight})`, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: 2, padding: '0px 15px' }}>
            <Tooltip title="File" >
              <InsertDriveFileIcon inheritViewBox fontSize='medium' sx={{ borderRadius: '50', cursor: 'pointer', color: 'dark' }} />
            </Tooltip>
            <Tooltip title="Picture">
              <InsertPhotoIcon inheritViewBox fontSize='medium' sx={{ borderRadius: '50', cursor: 'pointer', color: 'dark' }} />
            </Tooltip>
            <Tooltip title="Emoji">
              <EmojiEmotionsIcon inheritViewBox fontSize='medium' sx={{ borderRadius: '50', cursor: 'pointer', color: 'dark' }} />
            </Tooltip>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type..."
              size='small'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleSendToChat()
                }
              }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                minWidth: '120px', width: '100%',
                height: '100%',
                '& label': {
                  color: 'dark'
                },
                '& label.Mui-focused': {
                  color: 'dark'
                },
                '& input': {
                  color: 'dark'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'dark' },
                  '&:hover fieldset': { borderColor: 'dark' },
                  '&.Mui-focused fieldset': { borderColor: 'dark' }
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'dark'
                }
              }}
            />
            <Tooltip title="Send">
              <SendIcon
                onClick={handleSendToChat}
                fontSize='medium' inheritViewBox
                sx={{ borderRadius: '50', cursor: 'pointer', color: 'dark' }}
              />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatContent