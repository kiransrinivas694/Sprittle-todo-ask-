import {ListItem, Content, Delete} from './styledComponents'

const ActivityItem = props => {
  const {details, onDeleteActivity} = props
  const {id, firstNumber, secondNumber, option} = details

  const onDelete = () => {
    onDeleteActivity(id)
  }

  return (
    <ListItem>
      <Content>
        {firstNumber} {option} {secondNumber} = ?
      </Content>
      <Delete type="button" onClick={onDelete}>
        Delete
      </Delete>
    </ListItem>
  )
}

export default ActivityItem
