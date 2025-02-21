const { Deepstream } = require('@deepstream/server');

// Get default port
const port = process.env.WS_PORT || 3000;

// Create server
const server = new Deepstream(
{
  connectionEndpoints:
  [
    {
      type: 'http',
      options:
      {
        port: port
      }
    },
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
