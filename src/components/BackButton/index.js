import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/router";
import { Row, Text } from "../../util/theme"

const BackButton = ({

}) => {
  let router = useRouter();

  return <Row margin="10px 0 15px 15px" alignItems="center" onClick={e => router.back()}>
    <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '24px', marginRight: '15px', cursor: 'pointer' }} />
    <Text fontSize="large" cursor="pointer">{' Voltar'}</Text>
  </Row>
}

export default BackButton;