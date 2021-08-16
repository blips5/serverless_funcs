export default {
  type: "object",
  properties: {
    id: { type: 'string' },
    username: {type:'string'},
    password: {type: 'string'}
  },
  required: ['id']
} as const;
