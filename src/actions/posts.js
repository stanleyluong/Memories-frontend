import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE, START_LOADING, END_LOADING, FETCH_POST } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getPost = (id) => async (dispatch) => {
    console.log('get post for id', id)
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPost(id)
        console.log(data)
        dispatch( { type: FETCH_POST, payload: data })
        dispatch( {type: END_LOADING })
    } catch (error) {
        
        console.log('getPost error',error)
    }
}

export const getPosts = (page) => async (dispatch) => {
    console.log('get posts for', page)
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPosts(page)
        console.log(data)
        dispatch( { type: FETCH_ALL, payload: data })
        dispatch( {type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data: { data } } = await api.fetchPostsBySearch(searchQuery)
        dispatch( { type: FETCH_BY_SEARCH, payload: data })

        console.log(data)
        dispatch( {type: END_LOADING })

    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.createPost(post)
        history.push(`/Memories/posts/${data._id}`)

        dispatch({ type: CREATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.log(error)
    }
}