import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'
import BoardContent from '~/pages/Boards/BoardContent'
import { mockChatData } from '~/apis/mock-data'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardContent app={ mockChatData?.group } users={ mockChatData?.users } chat={ mockChatData?.chat } />
    </Container>
  )
}

export default Board