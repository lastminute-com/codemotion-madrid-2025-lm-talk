import type {StoreApi} from "zustand/vanilla";
import type ProfileState from "@/src/features/user/domain/model/ProfileState";

/**
 * Default to work with Zustand's vanilla store definition.
 * This is not tied to react.
 */
type ProfileStore = StoreApi<ProfileState>

export default ProfileStore;
