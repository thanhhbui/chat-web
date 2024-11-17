import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.chat.headerHeight} - ${theme.chat.boardBarHeight})`,
      backgroundColor: 'primary.light',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Box sx={{
        width: '30%',
        height: '100%'
      }}>Left</Box>
      <Box sx={{
        width: '70%',
        height: '100%'
      }}>Right</Box>
    </Box>
  )
}

export default BoardContent