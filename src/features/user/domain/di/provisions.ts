/**
 * Provides a place to define all your provisions from this module.
 */
import slContainer from "@/src/core/domain/di/slContainer";
import keys from "@/src/features/user/domain/di/keys";
import loadUser from "@/src/features/user/domain/usecase/loadUser";

slContainer.set(keys.loadUser, loadUser);
