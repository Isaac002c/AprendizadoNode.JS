import fastify from 'fastify'
import {DatabaseMemory} from './database-memory.js'

const server = fastify()

// GET, POST, PUT, DELETE...


//post http://localhost:3333/videos

const database = new DatabaseMemory()

server.post('/videos', () => {
    database.create({
        title:'video01',
        description:'esse é o video 01',
        duration:180,
    })

    console.log(database.list())
})

server.get('/videos', () => {
    return 'hello worldis'
})

server.put('/videos/:id', () => {
    return 'hello wor'
})

server.delete('/videos/:id', () => {
    return 'hello wor'
})

server.listen({
    port: 3333,
    host:'0.0.0.0'
})

