import { faInstagram ,faSoundcloud, faSpotify,
  faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SWrapper } from '@/styles/atoms/SocialMediaBubble'

const SocialMediaBubble = () => {
  return(
    <SWrapper>
      <FontAwesomeIcon icon={faSpotify}/>
      <FontAwesomeIcon icon={faInstagram}/>
      <FontAwesomeIcon icon={faYoutube}/>
      <FontAwesomeIcon icon={faSoundcloud}/>
    </SWrapper>
  )

}

export default SocialMediaBubble
