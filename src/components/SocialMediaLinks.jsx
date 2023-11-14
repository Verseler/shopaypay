import githubIcon from '../assets/github_icon.svg';
import facebookIcon from '../assets/facebook_icon.svg';
import instagramIcon from '../assets/instagram_icon.svg';
import linkedinIcon from '../assets/linkedin_icon.svg';

export default function SocialMediaLinks() {
  return(
    <ul className="flex items-center h-5 gap-7 w-max justify-evenl">
      <li className="h-full cursor-pointer">
        <img
          className="h-full w-max"
          width="24"
          height="24"
          src={githubIcon}
          alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo"
        />
        
      </li>
      <li className="h-full cursor-pointer">
        <img
          className="h-full w-max"
          width="50"
          height="50"
          src={facebookIcon}
          alt="facebook-new"
        />
      </li>
      <li className="h-full cursor-pointer">
        <img
          className="h-full w-max"
          src={instagramIcon}
          alt="instagram-new--v1"
        />
      </li>
      <li className="h-full cursor-pointer">
        <img
          className="h-full w-max"
          src={linkedinIcon}
          alt="linkedin"
        />
      </li>
    </ul>
  );
}