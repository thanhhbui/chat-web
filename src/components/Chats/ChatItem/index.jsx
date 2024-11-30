import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

function ChatItem({ name, avatar, status }) {
  return (
    <ListItem sx={{
      '&:hover': {
        bgcolor: 'lightblue',
        cursor: 'pointer',
        borderRadius: '6px'
      }
    }}>
      <ListItemAvatar sx={{ padding: '0px' }}>
        <Avatar src={avatar}/>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={status} />
    </ListItem>
  )
}

export default ChatItem
