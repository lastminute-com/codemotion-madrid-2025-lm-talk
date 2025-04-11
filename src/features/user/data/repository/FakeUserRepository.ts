import type Profile from "@/src/features/user/domain/model/Profile";

const FAKE_USER_PROFILE: Profile = {
  id: 123,
  username: "Ale Weichandt",
  avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIMmlc4NsAUreY5yb3VIBRSv5LdHUeX3vJyA7cySgF_w4Qupc0=s288-c-no",
}

class FakeUserRepository {
  getCurrentProfile(): Promise<Profile> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAKE_USER_PROFILE);
      }, 1000);
    });
  }
}

export default FakeUserRepository;
