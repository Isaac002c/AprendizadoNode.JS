import fastify from 'fastify'
import {DatabaseMemory} from './database-memory.js'

const server = fastify()

// GET, POST, PUT, DELETE...

//post http://localhost:3333/videos

const database = new DatabaseMemory()

//request body

server.post('/videos', (request, reply) => {
   const{title,description,duration} = request.body
   
    database.create({
        title:title,
        description: description,
        duration:duration,
    }) 


    return reply.status(201).send()
})

server.get('/videos', (request) => {
    const {search} = request.query

    console.log(search)

     const videos = database.list(search)

    console.log(videos)

    return videos
})

server.put('/videos/:id', (request, reply) => {
    const videoID = request.params.id
    const {title, description, duration} = request.body

    const video = database.update(videoID,{
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
    host:'0.0.0.0'
})