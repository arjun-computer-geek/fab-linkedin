import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addDoc, collection, Timestamp, query, orderBy, onSnapshot, QuerySnapshot, getDoc, getDocs
} from 'firebase/firestore'
import { db } from "utils";

export const getPost = createAsyncThunk(
    "post/getPost",
    async () => {

        // const data = await getDocs(postRef)
        // return data.docs.map(post => ({ ...post.data(), id: post.id }));

        function getArrangedData() {
            return new Promise((resolve, reject) => {

                const postRef = collection(db, 'posts')

                const q = query(postRef, orderBy('created', 'desc'))

                onSnapshot(q, querySnapshot => {
                    const posts = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))

                    if (posts) {
                        resolve(posts);
                    }
                    else {
                        reject("Unable to fetch Data")
                    }
                })
            })
        }

        const res = await getArrangedData()
        return res;

    }
)

export const createPost = createAsyncThunk(
    "post/createPost",
    async (postData) => {
        console.log(postData);

        await addDoc(collection(db, 'posts'), {
            content: postData.content,
            likes: 0,
            parentId: null,
            postPhoto: postData.postPhoto,
            created: Timestamp.now()

        })
    }
);



const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: null,
        loading: false,
        error: null,
    },

    reducers: {

        clearError: (state) => {
            state.error = null;
        },
        setError: (state, action) => {

            state.error = action.payload
        },
    },
    extraReducers: {
        [getPost.pending]: (state, action) => {
            state.posts = null;
            state.loading = true;
            state.error = null;
        },
        [getPost.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.loading = false;
            state.error = null;
        },
        [getPost.rejected]: (state, action) => {
            state.posts = null;
            state.loading = true;
            state.error = action.error.message;
        },

    },
});
export const { clearError, setError } = postSlice.actions;
export default postSlice.reducer;
