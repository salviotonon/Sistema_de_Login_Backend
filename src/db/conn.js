import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

async function main() {
    await mongoose.connect(process.env.DATABASE_HOST);

    console.log("Conexão com o MongoDB, criada com sucesso!");
}

main().catch((error) => console.log(error));

export default mongoose;