
import { firacode } from '../models/firacode.font';
import cardLayoutStyled from './information-layout.module.css';



function CardLayout({children}:{children:React.ReactNode}) {
    return(
      <div className={` ${firacode.className}  ${cardLayoutStyled.informationLayout}`}>
        {children}
      </div>
    )
} 

export default CardLayout;