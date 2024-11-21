import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

function ChatItem({ name, date }) {
  return (
    <ListItem >
      <ListItemAvatar>
        <Avatar>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={date} />
    </ListItem>
  )
}

export default ChatItem
