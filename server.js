const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const { graphqlHTTP } = require('express-graphql')

const graphQlSchema = require('./schema')
const graphQlResolvers = require('./resolvers')


app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema:graphQlSchema,
    rootValue:graphQlResolvers,
    graphiql:true
}))

const uri ='mongodb+srv://admin:mongoadmin12@cluster0.witgr.mongodb.net/test1?retryWrites=true&w=majority'
const options = { 
    useNewUrlParser:true,
    useUnifiedTopology: true
}

mongoose.connect(uri,options)
        .then(()=>{
            app.listen(4000, ()=>{
                    console.log('GraphQl server is running on localhost port 4000')
            })
        })
        .catch(error =>{
            throw error
        })
