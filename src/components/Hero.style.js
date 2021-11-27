import styled from '@emotion/styled';
import { Gmail } from '@styled-icons/simple-icons/Gmail';
import { Linkedin } from '@styled-icons/simple-icons/Linkedin';
import { Github } from '@styled-icons/simple-icons/Github';
import { DocumentDownload } from '@styled-icons/heroicons-outline/DocumentDownload';

export const HeroContainer = styled.div`
  text-align: center;
  width: fit-content;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 150px;
`;

export const IconContainer = styled.div`
  padding: 20px;
  a {
    color: white;
    margin-right: 20px;
  }
`;

export const Description = styled.div`
  color: ${props => props.theme.text};
  margin: 12px 0;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-left: 3px;
      font-size: 25px;
    }
  }
`;

export const DownloadCV = styled.button`
  color: white;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 260px;
  font-weight: 500;
  background: ${props => props.theme.text};
  color: ${props => props.theme.pageBackground};
  font-family: 'Quicksand', sans-serif;
  cursor: pointer;
  border: 0;
`;

export const ProfilePicture = styled.div`
  margin: auto;
  width: 90px;
  height: 90px;
  font-size: 60px;
  background: #e5e5e5;
  border-radius: 50%;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const GithubIcon = styled(Github)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.socialIcon};
`;

export const GmailIcon = styled(Gmail)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.socialIcon};
`;

export const LinkedInIcon = styled(Linkedin)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.socialIcon};
`;

export const DownloadCVIcon = styled(DocumentDownload)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
