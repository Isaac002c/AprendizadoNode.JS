import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()

    // Set, Map
    // universal unic ID

    list() {
        return this.#videos.values
    }

    create(video) {
        const videoId = randomUUID

        this.#videos.set()
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {

        this.#videos.delete(id)
    }
}