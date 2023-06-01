import Title from '../../components/Title'
import P from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <P type="main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam
      tempore numquam nulla reprehenderit molestias, corporis cumque molestiae
      error ipsum consectetur nemo eius aliquid, laborum possimus praesentium
      distinctio dolore eligendi.
    </P>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=Aleolivati&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aleolivati&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
