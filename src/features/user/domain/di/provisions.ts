/**
 * Provides a place to define all your provisions from this module.
 */
import diContainer from "@/src/core/domain/di/diContainer";
import keys from "@/src/features/user/domain/di/keys";
import loadUser from "@/src/features/user/domain/usecase/loadUser";

diContainer.set(keys.loadUser, loadUser);
