import type Profile from "@/features/user/domain/model/Profile";

class FakeUserRepository {
  getCurrentProfile(): Promise<Profile> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          username: "Ale Weichandt",
          avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIMmlc4NsAUreY5yb3VIBRSv5LdHUeX3vJyA7cySgF_w4Qupc0=s288-c-no",
        });
      }, 1000);
    });
  }
}

export default FakeUserRepository;
