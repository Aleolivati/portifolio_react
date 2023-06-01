import { Paragraph } from './styles'

export type Props = {
  children: string
  type?: 'main' | 'secondary'
}

const P = ({ children, type = 'main' }: Props) => (
  <Paragraph type={type}>{children}</Paragraph>
)

export default P
