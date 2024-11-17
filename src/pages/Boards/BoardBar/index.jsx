import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'primary.dark',
      height: (theme) => theme.chat.boardBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>content</Box>
  )
}

export default BoardBar