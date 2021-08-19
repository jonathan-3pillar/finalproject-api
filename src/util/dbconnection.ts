import {connect} from 'mongoose'

const connectMongo = async () => {
    try {
        await connect('mongodb://localhost:27017/pokeapp', { useNewUrlParser: true, useUnifiedTopology: true  });
        console.info("Mongo is connected")
      } catch (error) {
        console.error(error);
      }
}

export default connectMongo;