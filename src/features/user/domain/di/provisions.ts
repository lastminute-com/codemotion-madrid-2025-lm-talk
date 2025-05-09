import container from '@/src/core/domain/di/container'
import {LoadUserKey, ProfileStoreKey} from "@/src/features/user/domain/di/keys";
import loadUserFactory from "@/src/features/user/domain/usecase/loadUserFactory";
import bindDependencies from "@/src/core/domain/di/bindDependencies";

container.bind(LoadUserKey).toDynamicValue(() => bindDependencies(loadUserFactory, ProfileStoreKey))
