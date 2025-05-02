/**
 * Provides a place to define all your provisions from this module.
 */
import diContainer from "@/src/core/domain/di/diContainer";
import keys from "@/src/features/user/domain/di/keys";
import withDependencies from "@/src/core/domain/di/withDependencies";
import loadUserFactory from "@/src/features/user/domain/usecase/loadUserFactory";

const loadUser = withDependencies(loadUserFactory, keys.profileStore);
/**
 * We need to define the interface of our use case for DI purpose.
 */
export type LoadUser = typeof loadUser;

diContainer.set(keys.loadUser, loadUser);
