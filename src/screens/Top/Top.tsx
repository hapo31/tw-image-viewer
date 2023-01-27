import TweetContainer from "@/components/TweetContainer/TweetContainer";
import Tweet from "@/entity/Tweet";
import TwitterProfile from "@/entity/TwitterProfile";
import styled from "@emotion/styled";

const sampleTweets = [
  {
    id: "12345",
    authorUserId: "hoge",
    likeCount: 0,
    liked: false,
    mediaUrls: [],
    retweetCount: 0,
    retweeted: false,
    sensitive: false,
  },
  {
    id: "12347",
    authorUserId: "hoge",
    likeCount: 0,
    liked: false,
    mediaUrls: [],
    retweetCount: 0,
    retweeted: false,
    sensitive: false,
  },
  {
    id: "12225",
    authorUserId: "hoge",
    likeCount: 0,
    liked: false,
    mediaUrls: [],
    retweetCount: 0,
    retweeted: false,
    sensitive: false,
  },
  {
    id: "1231321",
    authorUserId: "hoge",
    likeCount: 0,
    liked: false,
    mediaUrls: [],
    retweetCount: 0,
    retweeted: false,
    sensitive: false,
  },
] satisfies Tweet[];

const profile = {
  externalWebsites: [
    {
      type: "pixiv",
      url: "https://www.pixiv.net/users/1340652",
    },
  ],
  imageUrl: "https://twich.tv/favicon.ico",
  screenName: "twitch",
  userId: "twich",
} satisfies TwitterProfile;

export default function Top() {
  return (
    <Wrap>
      <TweetContainer profile={profile} tweets={sampleTweets} />
      <TweetContainer profile={profile} tweets={sampleTweets} />
      <TweetContainer profile={profile} tweets={sampleTweets} />
      <TweetContainer profile={profile} tweets={sampleTweets} />
      <TweetContainer profile={profile} tweets={sampleTweets} />
      <TweetContainer profile={profile} tweets={sampleTweets} />
      <TweetContainer profile={profile} tweets={sampleTweets} />
      <TweetContainer profile={profile} tweets={sampleTweets} />
      <TweetContainer profile={profile} tweets={sampleTweets} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  padding-right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
`;
