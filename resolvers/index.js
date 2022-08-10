const Post = require('../models/post')

module.exports = {
    posts:async () => {
        try {
            const postsFetched = await Post.find()
            return postsFetched.map( post => {
                return {
                    ...post._doc,
                    _id: post.id,
                    createdAt: new Date(post._doc.createdAt).toISOString(),
                }
            })
            
        } catch (error) {
            throw error
        }
    },

    post: async (_id) =>{
        try {
            const postsFetched = await Post.findOne(_id);
            return {
                ...postsFetched._doc,
                _id: postsFetched.id,
                createdAt: new Date(postsFetched._doc.createdAt).toISOString(),
            }
            
        } catch (error) {
            throw error
        }
    },

    createPost: async args =>{
        try {
            const { body } = args.post
            const post = new Post({
                body
            })
            const newPost = await post.save()
            return { ...newPost._doc, _id: newPost.id}
            
        } catch (error) {
            throw error
        }
    },

    deletePost: async (id) =>{
        try {
            const deletePost = await Post.findByIdAndDelete(id)
            return {
                ...deletePost._doc,
                _id: deletePost.id,
                createdAt: new Date(deletePost._doc.createdAt).toISOString(),
            }
            
        } catch (error) {
            throw error
        }
    },

    updatePost: async args =>{
        try {
            const { _id , body } = args 
            const updatedPost = await Post.findByIdAndUpdate(_id, {body: body})
            return `Post ${updatedPost.id} updated successfully!!`
            
        } catch (error) {
            throw error
        }
    },
}