import Image from 'next/image';

import BacgroundDesktop from '@/assets/images/background-pattern-desktop.svg';
import BacgroundMobile from '@/assets/images/background-pattern-mobile.svg';
import IconMinus from '@/assets/images/icon-minus.svg';
import IconPlus from '@/assets/images/icon-plus.svg';
import IconStar from '@/assets/images/icon-star.svg';

function Separator() {
  return (<div className='bg-light-pink h-[1px] self-stretch my-5 sm:my-6'></div>)
}

function FaqItem({ question }: { question: string }) {
  return (
    <div className='flex items-center gap-6 justify-between cursor-pointer'>
      <h2 className='font-semibold hover:text-pink transition-all sm:text-[18px]'>{question}</h2>
      <Image src={IconPlus} alt="icon star" height={30} width={30} />
    </div>
  )
}

export default function Home() {
  return (
    <main className='min-h-screen flex bg-light-pink relative'>
      <div className='w-full border-none'>
        <div className="w-full h-[232px] relative block sm:hidden">
          <Image src={BacgroundMobile} alt="background pattern" fill />
        </div>
        <div className='w-full h-[320px] relative hidden sm:block'>
          <Image src={BacgroundDesktop} alt="background pattern" fill />
        </div>
      </div>
      <div className='absolute px-6 top-[142.5px] sm:top-[167.5px] w-full'>
        <div className='p-6 sm:p-10 flex flex-col items-start gap-6 sm:gap-8 self-stretch rounded-lg bg-white shadow-default w-full text-dark-purple max-w-[600px] mx-auto'>
          <div className='flex items-center gap-6'>
            <Image src={IconStar} alt="icon star" height={24} width={24} />
            <h1 className='text-[32px] sm:text-[56px] font-bold'>FAQs</h1>
          </div>
          <div className='flex items-center gap-6'>
            <h2 className='font-semibold sm:text-[18px]'>What is Frontend Mentor, and how will it help me?</h2>
            <Image src={IconMinus} alt="icon star" height={30} width={30} />
          </div>
          <div>
            <p className='text-grayish-purple text-[14px] sm:text-[16px]'>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It&apos;s suitable for all levels and ideal for portfolio building.</p>
            <Separator />
            <FaqItem question='Is Frontend Mentor free?' />
            <Separator />
            <FaqItem question='Can I use Frontend Mentor projects in my portfolio?' />
            <Separator />
            <FaqItem question='How can I get help if I&apos;m stuck on a challenge?' />
            <Separator />
          </div>
        </div>
      </div>
    </main>
  )
}
