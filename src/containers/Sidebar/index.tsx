import Avatar from '../../components/Avatar'
import P from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, SidebarContainer, ThemeButton } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Alexandre Olivati Sabatini Spindola</Title>
      <P type="secondary" fontSize={16}>
        Aleolivati
      </P>
      <Description type="main"> Engenheiro front-end </Description>
      <ThemeButton>Troca tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
