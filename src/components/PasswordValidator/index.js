import {useState} from 'react'
import {BgContainer, Container, H1, Input, Warn} from './styledComponents'

const PasswordValidator = () => {
  const [char, countChar] = useState('')
  const onChangeChar = event => {
    countChar(event.target.value)
  }

  return (
    <BgContainer>
      <Container>
        <H1>Password Validator</H1>
        <p>Check how strong and secure is your password</p>
        <Input type="password" value={char} onChange={onChangeChar} />
        {char.length < 8 && (
          <Warn>Your password must be at least 8 characters</Warn>
        )}
      </Container>
    </BgContainer>
  )
}
export default PasswordValidator
