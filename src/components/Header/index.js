import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Column, Divider, Row, Centered } from "../../util/theme";

export const InputSearch = styled.input`
  padding      : 0.5em;
  margin       : 0.5em;
  color        : #333333;
  height       : 25px;
  width        : ${props => props.width || '300px'};
  border       : 1px solid #C5C5C5;
  border-radius: 6px;
`;

export const Avatar = styled.div`
  height             : 40px;
  width              : 40px;
  line-height        : 40px;
  background-image   : url(${props => props.url});
  background-position: center;
  background-repeat  : no-repeat;
  background-size    : cover;
  border-radius      : 50%;
  cursor             : not-allowed;
`;

const Header = ({

}) => {

  const dispatch = useDispatch();
  const { filter = { title: '' } } = useSelector(state => state)
  const updateSearchAction = (payload) => {
    return { type: 'search/filters', payload }
  }

  const loadingAction = (payload) => {
    return { type: 'search/searching', payload }
  }

  return <Column width="100%">
    <Row height="50px" width="100%" alignItems="space-between">
      <InputSearch placeholder="Enter a title or IMDB code"
        defaultValue={filter.title}
        onChange={e => {
          dispatch(loadingAction(true))
          dispatch(updateSearchAction(e.nativeEvent.target.value))
        }}
      />
    </Row>
    <Divider />
  </Column>
}

export default Header;