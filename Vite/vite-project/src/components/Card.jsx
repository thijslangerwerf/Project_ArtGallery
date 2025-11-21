

const Card = ({children, bg = 'kaartje'}) => {
  return (
    <div className ={bg}>
      {children}
    </div>
  )
}

export default Card
