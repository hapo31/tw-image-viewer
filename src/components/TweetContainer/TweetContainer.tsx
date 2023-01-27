import styled from "@emotion/styled";
import { Card } from "@mui/material";
import Tweet from "../../entity/Tweet";
import TwitterProfile from "../../entity/TwitterProfile";
import ExternalWebsiteIcon from "../ExternalWebsite/ExternalWebsite";
import ProfileIcon from "../Profile/ProfileIcon";

type Props = {
  profile: TwitterProfile;
  tweets: Tweet[];
};

export default function TweetContainer({ profile, tweets }: Props) {
  return (
    <Wrap>
      <ProfileWrap>
        <ProfileIcon size="large" src={profile.imageUrl} />
        <ExternalWebsiteWrap>
          {profile.externalWebsites.map((website) => (
            <ExternalWebsiteIcon
              key={website.url}
              websiteType={website.type}
              url={website.url}
            />
          ))}
        </ExternalWebsiteWrap>
      </ProfileWrap>
    </Wrap>
  );
}

const Wrap = styled(Card)`
  user-select: none;
  padding: 10px;
  background-color: #3939f4;
  border-radius: 25px;
  height: 30vh;
  min-height: 180px;
  max-height: 300px;
  flex-shrink: 0;
  width: 100%;
`;

const ProfileWrap = styled.div`
  display: flex;
  gap: 7px;
`;

const ExternalWebsiteWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const TweetWrap = styled.div``;
