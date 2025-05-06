import withDependenciesHOC from "@/src/core/ui/di/withDependenciesHOC";
import keys from "@/src/features/user/domain/di/keys";
import TProfileView from "@/src/features/user/ui/ProfileView";

export const ProfileView = withDependenciesHOC(
  TProfileView,
  {
    loadUser: keys.loadUser,
    profileStore: keys.profileStore
  },
);
