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
        nonactive="https://loudbooru.com/_images/a1c2fa54153d30da1045a967fe8fd8a9/9228%20-%20character%3Alincoln_loud%20character%3Athe_red_guy%20cow_and_chicken%20crossover%20devil%20dialogue%20satan.png"
        active="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/860bb581-65ee-4112-854f-1255c5579143/dffb3t8-d1a0991f-db5c-49ff-a7f2-2bc8d3278004.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2MGJiNTgxLTY1ZWUtNDExMi04NTRmLTEyNTVjNTU3OTE0M1wvZGZmYjN0OC1kMWEwOTkxZi1kYjVjLTQ5ZmYtYTdmMi0yYmM4ZDMyNzgwMDQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.F2pBVw7v1HfA3zLlC5V5lc1xberJTFDwLT_GoKlT7Vw"
        secondary
        right
      />

      <CornyQuestion 
        question="Today is not just a celebration of your new age - It’salso  a celebration of the amazing man you have become"
        nonactive="https://assets.stickpng.com/images/61d183263a856e0004c6334a.png"
        active="https://pbs.twimg.com/media/E2ieswGVgAYKWt3.jpg"
        primary
        left
      />

      <CornyQuestion 
        question="I am so proud to call you mine & I love you more than words can ever say"
        nonactive="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a76b087-d923-4acf-85c5-118e6b81c7a0/d70lfsz-0a567aaf-a3ec-4cca-ac87-3820e4727e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhNzZiMDg3LWQ5MjMtNGFjZi04NWM1LTExOGU2YjgxYzdhMFwvZDcwbGZzei0wYTU2N2FhZi1hM2VjLTRjY2EtYWM4Ny0zODIwZTQ3MjdlOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PZQsxdrOyzYABwsLATW4K94fX8RQBzUIzLrR-l8BDPU"
        active="https://i.redd.it/v0ep5v1vbl331.png"
        secondary
        right
       />

      <CornyQuestion 
        question="Wish you health and wealth ~ May all your hard work be rewarded, hope my man can achieve everything he wants in life"
        nonactive="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a76b087-d923-4acf-85c5-118e6b81c7a0/d70lfsz-0a567aaf-a3ec-4cca-ac87-3820e4727e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhNzZiMDg3LWQ5MjMtNGFjZi04NWM1LTExOGU2YjgxYzdhMFwvZDcwbGZzei0wYTU2N2FhZi1hM2VjLTRjY2EtYWM4Ny0zODIwZTQ3MjdlOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PZQsxdrOyzYABwsLATW4K94fX8RQBzUIzLrR-l8BDPU"
        active="https://i.redd.it/v0ep5v1vbl331.png"
        primary
        left
       />

      <CornyQuestion 
        question="And may I always be there to cheer you on."
        nonactive="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a76b087-d923-4acf-85c5-118e6b81c7a0/d70lfsz-0a567aaf-a3ec-4cca-ac87-3820e4727e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhNzZiMDg3LWQ5MjMtNGFjZi04NWM1LTExOGU2YjgxYzdhMFwvZDcwbGZzei0wYTU2N2FhZi1hM2VjLTRjY2EtYWM4Ny0zODIwZTQ3MjdlOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PZQsxdrOyzYABwsLATW4K94fX8RQBzUIzLrR-l8BDPU"
        active="https://i.redd.it/v0ep5v1vbl331.png"
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
              [SYSTEM ALERT]: A "My birthday is just another day" boy has been detected
              [RESOLUTION]: That boy has been matched with a "Your birthday is the most special day ever" girl
              Processing... Your Dino is definitely more excited for your birthday than you are!
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
