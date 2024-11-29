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
    <Box sx={{ 
      width: { xs: '100%', md: '70%' },
      height: (theme) => `calc(100vh - ${theme.chat.headerHeight} - 20px)`,
      backgroundColor: ( theme ) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
      borderRadius: '6px',
      margin: '10px'
    }}>
      <Box sx={{ width: '100%', height: (theme) => theme.chat.chatHeaderHeight }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <ChatItem name='PTTH' date='online'/>
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
      <Box sx={{ width: '100%', height: (theme) => `calc(100% - ${theme.chat.chatHeaderHeight} - 10px)` }}>
        <Box sx={{ width: 'auto', height: (theme) => `calc(100% - ${theme.chat.chatHeaderHeight})`, backgroundColor: '#fff', margin: '0px 20px 10px 20px', borderRadius: '6px' }}>
        </Box>
        <Box sx={{ width: '100%', height: (theme) => `calc(${theme.chat.chatHeaderHeight} - 20px)`, display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: '20px' }}>
          <Box sx={{ width: '95%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: 2, padding: 0 }}>
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
              size='medium'
              // value={message}
              // onChange={handleInputChange}
              // onKeyPress={handleKeyPress}
              // color='dark'
              sx={{
                marginTop: '8px',
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
              <SendIcon fontSize='medium' inheritViewBox sx={{ borderRadius: '50', cursor: 'pointer', color: 'dark' }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatContent