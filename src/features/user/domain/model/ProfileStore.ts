import type {StoreApi} from "zustand/vanilla";
import type ProfileState from "@/src/features/user/domain/model/ProfileState";

export type ProfileStore = StoreApi<ProfileState>
