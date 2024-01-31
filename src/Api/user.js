import { getAuth, updateProfile } from "firebase/auth";

export class User {
  getMe() {
    const data = getAuth();
    return data.currentUser;
  }
  async updateAvatarUser(url) {
    try {
      const auth = getAuth();
      await updateProfile(auth.currentUser, {
        photoURL: url,
      });
    } catch (error) {
      throw error;
    }
  }
}
