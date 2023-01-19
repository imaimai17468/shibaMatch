export type ButtonProps = {
  outlined?: boolean
  size?: 'small' | 'middle' | 'large'
  children: React.ReactNode
  onClick?: () => void
  className?: string
}
