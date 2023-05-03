import cardLayoutStyled from './information-layout.module.css';

function CardLayout({children}:{children:React.ReactNode}) {
    return(
      <div className={cardLayoutStyled.informationLayout}>
        {children}
      </div>
    )
} 

export default CardLayout;