import Tweet from "@/entity/Tweet";
import { fetchApiKeys } from "@/invoke/tauriInvokes";
import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

export const apiKeyAtom = atom(async (get) => {
  return await fetchApiKeys();
});

const tweetAtom = atom<Tweet[]>([]);
