/**
 * Provides a place to define all your provisions from this module.
 */
import slContainer from "@/src/core/domain/di/slContainer";
import keys from "@/src/features/user/domain/di/keys";
import profileStore from "@/src/features/user/data/state/profileStore";

slContainer.set(keys.profileStore, profileStore);
