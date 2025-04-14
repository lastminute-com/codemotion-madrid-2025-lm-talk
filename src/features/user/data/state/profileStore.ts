import {createWithEqualityFn, UseBoundStoreWithEqualityFn} from "zustand/traditional";
import {shallow} from "zustand/vanilla/shallow";

import type ProfileState from "@/src/features/user/domain/model/ProfileState";

export const initialState: ProfileState = {
  loggedUser: undefined
}

const profileStore = createWithEqualityFn<ProfileState>()(
  () => initialState,
  shallow,
)

export default profileStore;
