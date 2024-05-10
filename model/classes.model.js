import mongoose from "mongoose";



const classesSchema =mongoose.Schema(
    { name: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    description: String,
    schedule: {
        dayOfWeek: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        }
    },
    capacity: {
        type: Number,
        required: true
    },
    enrolledMembers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member'
    }]
});



const classes = mongoose.model("classes", classesSchema);

export default classes;