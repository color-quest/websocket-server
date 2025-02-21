const { Deepstream } = require('@deepstream/server');

// Get default port
const port = process.env.WS_PORT || 3000;

// Create server
const server = new Deepstream(
{
  connectionEndpoints:
  [
    {
      type: 'ws-websocket',
      options:
      {
        port: port,
        host: '0.0.0.0'
      }
    }
  ]
});
      
// start the server
server.start();
