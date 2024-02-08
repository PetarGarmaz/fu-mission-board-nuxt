import { defineMongooseConnection } from '#nuxt/mongoose'

const connection = defineMongooseConnection(process.env.MONGODB_URI);

export default connection;