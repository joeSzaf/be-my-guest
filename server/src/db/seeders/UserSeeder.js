/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { User } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const usersData = [
      {
        email: "test@test.test",
        cryptedPassword: 'passowrd'
      },
      {
        email: "joe@test.test",
        cryptedPassword: 'passowrd2'
      }
    ]

    for (const singleUserData of usersData) {
      const currentUser = await User.query().findOne(singleUserData)
      if (!currentUser) {
        await User.query().insert(singleUserData)
      }
    }
  }
}

export default UserSeeder