import { Avatar, ListItem, ListItemAvatar, Typography } from '@mui/material'

function Message({ username, avatar, message, time, participant }) {
  return (
    <>
      {participant === 'recipient' ? (
        <ListItem sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <ListItemAvatar sx={{ minWidth: 0 }}>
            <Avatar src={avatar} />
          </ListItemAvatar>
          <Typography
            variant="body1"
            sx={{
              width: 'auto',
              height: '40px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              ml: '10px',
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0')
            }}
          >
            {message}
          </Typography>
        </ListItem>
      ) : (
        <ListItem sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography
            variant="body1"
            sx={{
              width: 'auto',
              height: '40px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              mr: '10px',
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0')
            }}
          >
            {message}
          </Typography>
          <ListItemAvatar sx={{ minWidth: 0 }}>
            <Avatar src={avatar} />
          </ListItemAvatar>
        </ListItem>
      )
      }
    </>
  )
}

export default Message