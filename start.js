const { Deepstream } = require('@deepstream/server');

// Get default port
const port = process.env.WS_PORT || 3000;

// Create server
const server = new Deepstream(
{
  httpServer:
  {
    type: 'default',
    options:
    {
        port: port
    }
  },
  connectionEndpoints:
  [
    {
      type: 'ws-binary',
      options:
      {
        urlPath: '/deepstream'
      }
    },
    {
      type: 'ws-json',
      options:
      {
        urlPath: '/deepstream-json'
      }
    }
  ]
});
      
// start the server
server.start();
