declare function jsmpeg(client: WebSocket, canvas: Object):void;
declare module 'streamClient'{
  export = jsmpeg;
}
