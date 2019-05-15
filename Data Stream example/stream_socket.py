# -*- coding: utf-8 -*-
import asyncio
import datetime
import random
import websockets

async def time(websocket, path):
    while True:
        #Change to get stream
        now = datetime.datetime.utcnow().isoformat() + 'Z'
        await websocket.send(now)
        await asyncio.sleep(random.random() * 3) #Change this to match sample rate

start_server = websockets.serve(time, '127.0.0.1', 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

"""
#Example multithreading.
MAX_CLIENTS = 3

async def asynchronous():
    start = time.time()
    tasks = [asyncio.ensure_future(
        fetch_async(i)) for i in range(MAX_CLIENTS)]
    await asyncio.wait(tasks)
    print("Process took: {:.2f} seconds".format(time.time() - start))

print('Asynchronous:')
ioloop = asyncio.get_event_loop()
ioloop.run_until_complete(asynchronous())
ioloop.close()

"""