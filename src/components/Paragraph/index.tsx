import { Paragraph } from './styles'

export type Props = {
  children: string
  type?: 'main' | 'secondary'
  fontSize?: number
}

const P = ({ children, type = 'main', fontSize }: Props) => (
  <Paragraph type={type} fontSize={fontSize}>
    {children}
  </Paragraph>
)

export default P
