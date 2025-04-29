/**
 * Provides a place to define all your provisions from this module.
 */
import slContainer from "@/src/core/domain/di/slContainer";
import keys from "@/src/features/user/domain/di/keys";
import loadUserFactory from "@/src/features/user/domain/usecase/loadUserFactory";

/**
 * profile store must be provided before loadUser
 */
const loadUser = loadUserFactory(slContainer.get(keys.profileStore));
slContainer.set(keys.loadUser, loadUser);
