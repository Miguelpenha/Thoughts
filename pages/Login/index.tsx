import Container from './Container'
import HeaderBack from '../../components/HeaderBack'
import Form from './Form'

function Login() {
  return (
    <Container>
      <HeaderBack back={false}>Login</HeaderBack>
      <Form/>
    </Container>
  )
}

export default Login