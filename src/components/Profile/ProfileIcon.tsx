import { Avatar, styled } from "@mui/material";

type Props = {
  src: string;
  size: "small" | "mid" | "large";
  variant?: "rounded" | "square";
};

export default function ProfileIcon({ src, size, variant }: Props) {
  return <SizedAvator src={src} className={size} variant={variant} />;
}

const SizedAvator = styled(Avatar)`
  aspect-ratio: 1;

  &.small {
    width: 20px;
    height: 20px;
  }
  &.mid {
    width: 30px;
    height: 30px;
  }
  &.large {
    width: 50px;
    height: 50px;
  }
`;
