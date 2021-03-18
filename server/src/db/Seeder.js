/* eslint-disable no-console */
import { connection } from "../boot.js"

import UserSeeder from "./seeders/UserSeeder.js"
// import EventSeeder from "./seeders/EventSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding users...")
    await UserSeeder.seed()

    // console.log("seeding events...")
    // await EventSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder