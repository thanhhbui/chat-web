import { Box, SvgIcon, TextField, Tooltip } from '@mui/material'
import { ReactComponent as Phone } from '~/assets/phone.svg'
import { ReactComponent as Video } from '~/assets/video.svg'
import { ReactComponent as More } from '~/assets/more.svg'
import ChatItem from '~/components/Chats/ChatItem'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import SendIcon from '@mui/icons-material/Send'

function ChatContent() {
  return (
    <Box sx={{ width: {xs: '100%', md: '70%'}, height: (theme) => `calc(100vh - ${theme.chat.headerHeight})`, backgroundColor: 'primary.light', borderRadius: '12px', margin: '10px' }}>
      <Box sx={{ width: '100%', height: (theme) => theme.chat.chatHeaderHeight }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <ChatItem name='PTTH' date='online'/>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '8px 16px', gap: 2 }}>
            <Tooltip title="Call">
              <SvgIcon component={Phone} inheritViewBox sx={{ fontSize: 32, borderRadius: '50', cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip title="Video Call">
              <SvgIcon component={Video} inheritViewBox sx={{ fontSize: 32, borderRadius: '50', cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip title="More">
              <SvgIcon component={More} inheritViewBox sx={{ fontSize: 32, borderRadius: '50', cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%', height: (theme) => `calc(100% - ${theme.chat.chatHeaderHeight} - 10px)` }}>
        <Box sx={{ width: 'auto', height: (theme) => `calc(100% - ${theme.chat.chatHeaderHeight})`, backgroundColor: '#fff', margin: '10px', borderRadius: '12px' }}>
        </Box>
        <Box sx={{ width: '100%', height: (theme) => `calc(${theme.chat.chatHeaderHeight} - 20px)`, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <Box sx={{ width: '95%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: 2 }}>
            <Tooltip title="File" >
              <InsertDriveFileIcon sx={{ fontSize: '32px', borderRadius: '50', cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip title="Picture">
              <InsertPhotoIcon sx={{ fontSize: '32px', borderRadius: '50', cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip title="Emoji">
              <EmojiEmotionsIcon sx={{ fontSize: '32px', borderRadius: '50', cursor: 'pointer' }} />
            </Tooltip>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Nhập tin nhắn..."
              // value={message}
              // onChange={handleInputChange}
              // onKeyPress={handleKeyPress}
              sx={{
                marginTop: '8px'
              }}
            />
            <Tooltip title="Send">
              <SendIcon sx={{ fontSize: '32px', borderRadius: '50', cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatContent