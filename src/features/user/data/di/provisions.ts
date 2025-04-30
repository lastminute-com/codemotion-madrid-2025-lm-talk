/**
 * Provides a place to define all your provisions from this module.
 */
import diContainer from "@/src/core/domain/di/diContainer";
import keys from "@/src/features/user/domain/di/keys";
import profileStore from "@/src/features/user/data/state/profileStore";

diContainer.set(keys.profileStore, profileStore);
