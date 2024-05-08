import mongoose from '../libs/mongoose'
const { Schema } = mongoose

const eventSchema = new Schema(
  {
    type: String,
    data: {},
  },
  { timestamps: true }
)

const Event = mongoose.model('Event', eventSchema)

export default Event
