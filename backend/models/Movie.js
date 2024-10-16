const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,     
    },
    genre: {
        type: String,
        required: true,
    },
    rating : {
        type: Number,
        required: true,
    },
    tmdbId: {
        type: Number,
        required: true,
    }
})