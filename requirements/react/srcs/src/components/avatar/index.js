import { AvatarBackground, AvatarContainer, AvatarText } from './style'
const Avatar = ({ initial }) => (
    <AvatarContainer>
        <AvatarBackground />
        <AvatarText>{initial}</AvatarText>
    </AvatarContainer>
);

export default Avatar;