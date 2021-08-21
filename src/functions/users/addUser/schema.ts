export default {
  type: "object",
  properties: {
    id: { type: 'string' },
    username: {type:'string'},
    password: {type: 'string'},
    email: {type: 'string'},
    roles: { type: 'array' },
    createdAt: { type: 'number' }
  },
  required: ['id', 'username', 'password', 'email', 'roles']
} as const;
