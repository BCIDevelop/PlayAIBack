import { connect } from "mongoose";

export default async () => {
  const databases:{[index:string]:{uri:string,options:{}}} = {
    development: {
      uri: `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      options: {
        useNewUrlParser: true,
      },
    },
    production: {
      uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}/?retryWrites=true&w=majority`,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  };

  const { uri, options } = databases[process.env.NODE_ENV!];

  try {
    await connect(uri, options);
    console.log("MongoDB Running");
  } catch (error) {
    console.error(`MongoDB Error -> ${error}`);
  }
};
