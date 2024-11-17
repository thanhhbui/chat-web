import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ModeSelect from '../../components/ModeSelect'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        width: '100%',
        backgroundColor: 'primary.light',
        height: (theme) => theme.chat.headerHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>
      <Box sx={{
        width: '100%',
        backgroundColor: 'primary.dark',
        height: (theme) => theme.chat.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>content</Box>
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
    </Container>
  )
}

export default Board