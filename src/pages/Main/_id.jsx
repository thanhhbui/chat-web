import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'
import MainContent from '~/pages/Main/MainContent'
import { mockChatData } from '~/apis/mock-data'

function Main() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <MainContent app={ mockChatData?.group } users={ mockChatData?.users } chat={ mockChatData?.chat } />
    </Container>
  )
}

export default Main