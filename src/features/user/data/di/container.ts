import container from '@/src/core/domain/di/container'
import {ProfileStoreKey} from "@/src/features/user/domain/di/keys";
import profileStore from "@/src/features/user/data/state/profileStore";

container.bind(ProfileStoreKey).toConstantValue(profileStore)
