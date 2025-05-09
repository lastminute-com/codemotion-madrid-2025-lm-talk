import container from '@/src/core/domain/di/container'
import bindDependenciesHOC from "@/src/core/ui/di/bindDependenciesHOC";
import {LoadUserKey, ProfileStoreKey} from "@/src/features/user/domain/di/keys";
import {ProfileViewKey} from "@/src/features/user/ui/di/keys";
import ProfileView from "@/src/features/user/ui/ProfileView";

container.bind(ProfileViewKey).toDynamicValue(() => bindDependenciesHOC(ProfileView, {
  store: ProfileStoreKey,
  load: LoadUserKey,
}))
