import { BackgroundBeams } from '@/components/magicui/BackgroundBeams';

const Header = () => {
  return (
    <header className="relative pt-24 h-96 min-h-[40rem] w-full rounded-md flex flex-col items-center justify-center antialiased">
        <div className="relative container text-center z-[1] flex flex-col items-center justify-center">
            <h2 className='text-xl font-normal mb-2'>👋,  I am Arjun Singh and a creative freelancer</h2>
            <h1 className='font-medium [font-size:_clamp(3rem,15vw,8rem)] [line-height:_clamp(4rem,12vw,8rem)]'>Webdesigner <br /> <span className='drop-shadow-textShadow'>& Developer</span></h1>
            <p className='max-w-[450px] m-auto mt-5'>I bring value to web development projects by merging technical expertise with creativity and aesthetics.</p>

            <div id='scroll-down' className='relative h-20 w-4'></div>
        </div>
        
      <BackgroundBeams />
    </header>
  )
}

export default Header