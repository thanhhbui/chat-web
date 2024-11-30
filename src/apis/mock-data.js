export const mockChatData = {
  group: {
    _id: 'chat-app-id-01',
    name: 'ChatApp Pro',
    description: 'A real-time chat application',
    type: 'public', // 'private'
    ownerIds: ['user-id-01'], // Những user là admin của app
    memberIds: ['user-id-01', 'user-id-02', 'user-id-03'], // Những user là thành viên của app
    chatRoomOrderIds: ['room-id-01', 'room-id-02', 'room-id-03'], // Thứ tự sắp xếp / vị trí của các phòng chat
    chatRooms: [
      {
        _id: 'room-id-01',
        appId: 'chat-app-id-01',
        title: 'General Discussion',
        description: 'This is a general chat room for everyone',
        messageOrderIds: ['message-id-01', 'message-id-02', 'message-id-03', 'message-id-04'],
        members: ['user-id-01', 'user-id-02', 'user-id-03'], // Members in this chat room
        messages: [
          {
            _id: 'message-id-01',
            roomId: 'room-id-01',
            senderId: 'user-id-01',
            content: 'Hello everyone!',
            timestamp: '2024-11-29T10:00:00Z',
            attachments: []
          },
          {
            _id: 'message-id-02',
            roomId: 'room-id-01',
            senderId: 'user-id-02',
            content: 'Hi, how are you?',
            timestamp: '2024-11-29T10:05:00Z',
            attachments: ['https://example.com/image01.png']
          },
          {
            _id: 'message-id-03',
            roomId: 'room-id-01',
            senderId: 'user-id-03',
            content: 'I am good, thanks!',
            timestamp: '2024-11-29T10:10:00Z',
            attachments: []
          }
        ]
      },
      {
        _id: 'room-id-02',
        appId: 'chat-app-id-01',
        title: 'Project Team Chat',
        description: 'Chat room for project discussions',
        messageOrderIds: ['message-id-05', 'message-id-06'],
        members: ['user-id-01', 'user-id-03'], // Members in this chat room
        messages: [
          {
            _id: 'message-id-05',
            roomId: 'room-id-02',
            senderId: 'user-id-01',
            content: 'Let’s start with the project plan.',
            timestamp: '2024-11-29T11:00:00Z',
            attachments: []
          },
          {
            _id: 'message-id-06',
            roomId: 'room-id-02',
            senderId: 'user-id-03',
            content: 'Sure, I’ve shared the documents.',
            timestamp: '2024-11-29T11:10:00Z',
            attachments: ['https://example.com/doc01.pdf']
          }
        ]
      },
      {
        _id: 'room-id-03',
        appId: 'chat-app-id-01',
        title: 'Random Chat',
        description: 'A room for random topics',
        messageOrderIds: [],
        members: ['user-id-02', 'user-id-03'], // Members in this chat room
        messages: []
      }
    ]
  },
  chat: [
    {
      _id: 'user-id-01',
      name: 'Alice',
      message: 'hihihi',
      avatar: 'https://vcdn1-giaitri.vnecdn.net/2022/09/23/-2181-1663929656.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=wvx3Xd9YNeLA-9IvhcFllw',
      Participant: 'recipient'
    },
    {
      _id: 'user-id-02',
      name: 'Bob',
      message: 'hahaha',
      avatar: 'https://i.pinimg.com/564x/15/a2/c1/15a2c1eeb335985509fb44d7e39e073a.jpg',
      Participant: 'sender'
    }
  ],
  users: [
    {
      _id: 'user-id-01',
      name: 'Alice',
      avatar: 'https://vcdn1-giaitri.vnecdn.net/2022/09/23/-2181-1663929656.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=wvx3Xd9YNeLA-9IvhcFllw',
      status: 'online'
    },
    {
      _id: 'user-id-02',
      name: 'Bob',
      avatar: 'https://photo.znews.vn/w1920/Uploaded/neg_yslewlx/2023_01_09/Avatar_1.jpg',
      status: 'offline'
    },
    {
      _id: 'user-id-03',
      name: 'Charlie',
      avatar: 'https://i.ytimg.com/vi/lc0gis09VZs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZmW7xwSc_4aGabkL0K6XcvNIn_A',
      status: 'online'
    }
  ]
}
