import { Container } from './Container';
import { cardItems } from '../Data/data';
export const Card = () => {
  return (
    <>
    <Container>
        <div className='max-w-[1300px] mx-auto'>
            <div className='flex flex-wrap gap-[25px] xl:justify-normal justify-center items-center'>
                {
                    cardItems.map(({img, title, subTitle, price, img2, text}, i) => (
                        <div key={i}>
                            <div className='relative hover:scale-105 transition-all'>
                            <img src={img} alt="" />
                            <div className='absolute top-3 right-3 p-[10px] bg-white rounded-[40px]'>
                                <div className='flex gap-[4px]'>
                                    <img src={img2} alt="" />
                                    <p className='text-[#18181B] font-bold text-twelve'>{text}</p>
                                </div>
                            </div>
                            </div>
                            <div className='space-y-[16px]'>
                            <p className='font-bold text-base pt-5'>{title}</p>
                            <p className='text-[14px] text-accent'>{subTitle}</p>
                            <p>{price}</p>
                            </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </Container>
    </>
  )
}
