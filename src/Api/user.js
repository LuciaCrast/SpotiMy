import { getAuth } from "firebase/auth";

export class User {
  getMe() {
    try {
      const data = getAuth();
      return data.currentUser;
    } catch (error) {
      throw error;
    }
  }
}
