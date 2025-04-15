/**
 * Provides a place to define all your provisions from this module.
 */
import { profileStore } from "@/src/features/user/data/provisions";
import { loadUserFactory } from "@/src/features/user/domain/provisions";

/**
 * We can create composed provisions here as well.
 */
export const loadUser = loadUserFactory(profileStore)
