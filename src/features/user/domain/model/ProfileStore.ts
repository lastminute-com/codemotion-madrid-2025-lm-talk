import type ProfileState from "@/src/features/user/domain/model/ProfileState";

export type ProfileStore = {
    setState: (state: Partial<ProfileState>) => void;
    getState: () => ProfileState;
}
