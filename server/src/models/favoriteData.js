import mongoose, { Schema } from "mongoose";

const FavoriteTweetSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  tweets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tweet"
    }
  ]
});

//should index be dev only? revisit
FavoriteTweetSchema.index({ userId: 1 }, { unique: true });

export default mongoose.model("FavoriteTweet", FavoriteTweetSchema);
