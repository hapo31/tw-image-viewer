import TwitterProfile from "./TwitterProfile";

export default interface Tweet {
  id: string;
  authorUserId: string;
  mediaUrls: string[];
  liked: boolean;
  retweeted: boolean;
  likeCount: number;
  retweetCount: number;
  sensitive: boolean;
}
