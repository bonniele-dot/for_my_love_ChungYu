import CommentedImage from '../components/Commented Image'
import CornyQuestion from '../components/Corny Question'
import RandomButton from '../components/Random Button'

import { useRef, useState } from 'react'

import {
  Button,
  Code,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

export default function Home() 
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const [confirmed, setConfirmation] = useState(false)

  return (
    <>
    
      <div className="flex flex-row justify-center items-center w-full h-full bg-pink-200 p-10 drop-shadow-xl">
        <div className="w-2/3 h-64 bg-gradient-to-r from-pink-300 to-pink-200 drop-shadow-xl rounded-full text-center transition-all duration-300">
          <h1 className="p-6 tracking-wide text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase drop-shadow-lg leading-tight">Hi my love Chung Yu, happy birthday to you! 我的大男孩，生日快乐！暴富暴帅～谢谢你出现在我的生命里！我越来越爱你。希望以后的每一个生日，我都在你身边🎉💖</h1>

        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full h-96 bg-pink-50">
        <CommentedImage src='/Photo1.jpeg' text="this is my handsome man"/>
        <CommentedImage src='/photo2.jpg' text="and today is his birthday"/>
        <CommentedImage src='/photo3.jpg' text="showing you my love and care in here, hope you can feel it"/>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">Today is a very special day...</h1>
      </div>

      <div className="flex flex-col items-center text-center w-full h-96 bg-pink-50 p-10">
        <div className="flex flex-row items-center text-center w-full h-5/6 bg-pink-50">
          <h1 className='w-1/3 text-pink-300 font-bold text-2xl'>Because on this exact day 29 years ago</h1>
          <img src='https://sweezy-cursors.com/wp-content/uploads/cursor/milk-amp-mocha-bear-love/milk-mocha-bear-love-custom-cursor.png' width={600}/>
          <h1 className='w-1/3 text-pink-300 font-bold text-2xl'>my favorite person in the world was born.</h1>
        </div>
        <h1 className="w-full h-1/4 text-pink-300 font-bold text-5xl uppercase">and Im so happy that I met him in this life</h1>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-2xl font-bold text-pink-400 uppercase drop-shadow-xl">To the man who makes my world brighter, I might not say this enough......</h1>
      </div>

      <div className="w-full bg-pink-50 py-12 px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-500 uppercase tracking-wide">
         A Message For You 💖
         </h2>

         <p className="max-w-4xl mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-pink-300 leading-relaxed">
          I see everything you do for us, every time you explore the world with me,
          every time you make me laugh when I’m sad, every time you believe in me,
          every good food we try together, every thing you teach me, every everything..
  </p>
  <img className="h-28 mt-8" src="/photo5.jpg" alt="cute" />
</div>

      <CornyQuestion 
        question="I see everything you do for us, every time you explore the world with me, every time you make me laugh when Im sad, every time you believe in me, every good food we try together, every thing you teach me, every everything.."
        nonactive="photo4.JPG"
        active="photo5.jpg"
        primary
        left
      />
      

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-200 p-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-5xl'>You are my biggest supporter! And my favorite person on earth</h1>
      </div>

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5">
        <h1 className='w-2/3 text-pink-300 font-bold text-5xl'>Thank you for working so hard for our future and thank you for keep on choosing me every day</h1>
      </div>

      <CornyQuestion 
        question="I see how hard you work and I appreciate everything you do"
        nonactive="https://i.pinimg.com/736x/48/d7/ee/48d7eecc5a0b289a56861a34afb06ee0.jpg"
        active="https://i.pinimg.com/736x/69/32/62/6932629b9bc7a62094c453d361051d1b.jpg"
        secondary
        right
      />

      <CornyQuestion 
        question="Today is not just a celebration of your new age - It’salso  a celebration of the amazing man you have become"
        nonactive="https://i.pinimg.com/736x/e0/34/f8/e034f8bb6ae223cbbf17fe4f2ecd061b.jpg"
        active="https://i.pinimg.com/1200x/5d/1a/6e/5d1a6e1546593c4d360fdc7fe16deb4e.jpg"
        primary
        left
      />

      <CornyQuestion 
        question="I am so proud to call you mine & I love you more than words can ever say"
        nonactive="https://i.pinimg.com/1200x/2b/a8/cd/2ba8cd2bba6ff06b6a1248669187d04a.jpg"
        active="https://i.pinimg.com/736x/88/71/be/8871be287b8d269cf1f147c8fb11c238.jpg"
        secondary
        right
       />

      <CornyQuestion 
        question="Wish you health and wealth ~ May all your hard work be rewarded, hope my man can achieve everything he wants in life"
        nonactive="photo123.jpg"
        active="photo23.jpeg"
        primary
        left
       />

      <CornyQuestion 
        question="And may I always be there to cheer you on."
        secondary
        right
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 px-5 pt-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>Are you ready for another year growing old with me???</h1>
      </div>

      <div className="flex flex-row justify-around items-start text-center w-full h-36 bg-pink-50 pb-5">
        <RandomButton 
          text="No"
          minHeight={ 4600 }
          maxHeight={ 5000 }
        />

        <button 
          className="w-36 bg-pink-400 text-white text-2xl p-5 rounded-2xl"
          onClick={ onOpen }
        >
          YES
        </button>

        <AlertDialog
          isOpen={ isOpen }
          leastDestructiveRef={ cancelRef }
          onClose={ onClose } 
        >
          <AlertDialogOverlay>
            <AlertDialogContent>

              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                OMG.
              </AlertDialogHeader>

              <AlertDialogBody>
                You promise?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button 
                  colorScheme='pink' 
                  ref={ cancelRef } 
                  onClick={
                    () => 
                    {
                      onClose();
                      setConfirmation(true);
                    }
                  }
                >
                  Confirm
                </Button>
              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>

      {
        confirmed ? 
        <div className="flex flex-col justify-around items-center text-center w-full h-[58em] bg-pink-200 p-5">
          <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>The Official Birthday Contract - Level 29 Unlocked</h1>
          <div className="flex flex-col items-center gap-5 text-center w-3/4 h-5/6 bg-white p-5 rounded-3xl shadow-xl">
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
            <h1 className='w-2/3 text-black font-bold text-4xl underline'>
  [SYSTEM ALERT]: A &quot;My birthday is just another day&quot; boy has been detected
  <br />
  [RESOLUTION]: That boy has been matched with a &quot;Your birthday is the most special day ever&quot; girl
  <br />
  Processing... Your Dino is definitely more excited for your birthday than you are!
</h1>
            </h1>
           {/* OFFICIAL BIRTHDAY CONTRACT SECTION */}
<div className="flex flex-col items-center text-center w-full bg-white py-12 px-6">
  <p className="max-w-3xl text-gray-700 text-lg sm:text-xl leading-relaxed">
    Happy birthday to the person who owns my heart, even from miles apart.
    <br />
    <span className="italic text-gray-600">
      Note: this contract remains legally binding across all time zones.
    </span>
  </p>

  <p className="max-w-3xl mt-6 text-gray-700 text-lg sm:text-xl leading-relaxed">
    Reminder: Even though distance keeps us apart, my heart never left your side.
  </p>

  <div className="w-24 h-1 bg-pink-200 rounded-full my-10" />

  <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-500 uppercase tracking-wide">
    Level 29 Certification
  </h2>
  <p className="max-w-3xl mt-4 text-gray-700 text-lg sm:text-xl leading-relaxed">
    Wow, another year passed! My favorite man is now officially entering his 29th Birthday.
    <br />
    Despite the ups and downs of the past year, I am so incredibly proud of you.
  </p>

  <div className="w-24 h-1 bg-pink-200 rounded-full my-10" />

  <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-500 uppercase tracking-wide">
    Dino Recognition
  </h2>
  <p className="max-w-3xl mt-4 text-gray-700 text-lg sm:text-xl leading-relaxed">
    You’ve been giving your best, even when things get tough.
    <br />
    This resilience is one of the many reasons I love you so much.
    <br />
    You are my peace and the one I always root for.
  </p>

  <div className="w-24 h-1 bg-pink-200 rounded-full my-10" />

  <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-500 uppercase tracking-wide">
    Mandatory Celebration Requirement
  </h2>
  <p className="max-w-3xl mt-4 text-gray-700 text-lg sm:text-xl leading-relaxed">
    On your special day, you are contractually obligated to be cherished by me.
    <br />
    I wish I could be there to hug you, celebrate with you, eat the cake with you and see you in person.
  </p>

  <div className="w-24 h-1 bg-pink-200 rounded-full my-10" />

  <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-500 uppercase tracking-wide">
    Ongoing Encouragement
  </h2>
  <p className="max-w-3xl mt-4 text-gray-700 text-lg sm:text-xl leading-relaxed">
    I hope this message makes you feel how much I love and miss you.
    <br />
    I will always be there to cheer you on, today and every day after.
  </p>

  <div className="w-24 h-1 bg-pink-200 rounded-full my-10" />

  <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-500 uppercase tracking-wide">
    Official Birthday Confirmation
  </h2>

  <div className="w-full max-w-3xl mt-6 bg-pink-50 border border-pink-100 rounded-2xl p-6 text-left">
    <p className="text-lg sm:text-xl text-gray-800">
      <span className="font-semibold text-pink-600">Name of Partner:</span> Chen Chung Yu
    </p>
    <p className="text-lg sm:text-xl text-gray-800 mt-2">
      <span className="font-semibold text-pink-600">Location:</span> My Heart (Permanently)
    </p>
    <p className="text-lg sm:text-xl text-gray-800 mt-2">
      <span className="font-semibold text-pink-600">Status:</span> Deeply Loved &amp; Appreciated
    </p>
    <p className="text-lg sm:text-xl text-gray-800 mt-2">
      <span className="font-semibold text-pink-600">Events Included:</span> • Virtual Kisses • Infinite Support • Future Adventures •
    </p>
  </div>

  <img
    className="h-16 mt-10 opacity-70"
    src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png"
    alt=""
  />
</div>

          </div>
        </div>
        : 
        <></>
      }
    
    </>
  )
}
