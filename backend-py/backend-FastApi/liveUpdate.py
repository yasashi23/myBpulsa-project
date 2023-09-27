import socketio


orig = []

sio_server = socketio.AsyncServer(
    async_mode='asgi',
    cors_allowed_origins=orig
)

sio_app = socketio.ASGIApp(
    socketio_server = sio_server,
    socketio_path='sockets'
)


@sio_server.event
async def connect(sid,environ,auth):
    print(f"{sid} connected")
    # await sio_server.emit('dataPulsa',dataPu)
    # await sio_server.emit('dataPrefix',dataPre)
    return "ok"

@sio_server.event
async def testing(sid,message):
    print(message)
    await sio_server.emit('testing',message)
    return "BERHASIL AHAY DEDH"
    

@sio_server.event
async def disconnect(sid):
    print(f"{sid} disconnected")  
    return "ok"  