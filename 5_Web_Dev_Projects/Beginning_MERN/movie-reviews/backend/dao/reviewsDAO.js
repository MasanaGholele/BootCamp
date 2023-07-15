import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let reviews

export default class ReviewsDao {
    static async injectDB(conn) {
        if (reviews) {
            return
        }
        try {
            reviews = await conn.db(process.env.MOVIEREVIEWS_NS).collection('reviews')
        } catch (e) {
            console.error(`Unable to establish connection handle in review DAO: ${e}`)
        }
    }

    static async addReview(movieId, user, review, date) {
        try {
            const reviewDoc = {
                name: user.name,
                user_id: user._id,
                review,
                movie_id: new ObjectId(movieId),
            }
            return await reviews.insertOne(reviewDoc);
        }
        catch (e) {
            console.error(`Unable to post review: ${e}`)
            return { error: e }
        }
    }

    static async updateReview(reviewId, userId, review, date) {
        try {
            const updateResponse = await reviews.updateOne(
                {user_id: userId, _id: new ObjectId(reviewId)},
                {$set:{review:review, date:date}}
            )
            return updateResponse
        }
        catch(e) {
            console.error(`Unable to update review: ${e}`)
            return { error: e }
        }
    }

    static async deleteReview(reviewId, userId) {
        try {
            const deleteResponse = await reviews.deleteOne({
                _id: new ObjectId(reviewId),
                user_id: userId,
            })
            return deleteResponse
        }
        catch (e) {
            console.error(`Unable to delete review: ${e}`)
            return { error: e }
        }
    }
}