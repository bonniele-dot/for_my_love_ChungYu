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
          <h1 className="p-6 tracking-wide text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase drop-shadow-lg leading-tight"> Hi my love Chung Yu, happy birthday to you! 我的⼤男孩，生日快乐！🎉💖</h1>

        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full h-96 bg-pink-50">
        <CommentedImage src='/photo1.JPG' text="this is my handsome man"/>
        <CommentedImage src='/photo2.jpg' text="and today is his birthday"/>
        <CommentedImage src='/photo3.PNG' text="showing you my love and care in here, hope you can feel it"/>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">Today is a very special day...</h1>
      </div>

      <div className="flex flex-col items-center text-center w-full h-96 bg-pink-50 p-10">
        <div className="flex flex-row items-center text-center w-full h-5/6 bg-pink-50">
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>Because on this exact day 29 years ago</h1>
          <img src='https://sweezy-cursors.com/wp-content/uploads/cursor/milk-amp-mocha-bear-love/milk-mocha-bear-love-custom-cursor.png' width={600}/>
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>my favorite person in the world was born.</h1>
        </div>
        <h1 className="w-full h-1/4 text-pink-300 font-bold text-6xl uppercase">and Im so happy that I met him in this life</h1>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">To the man who makes my world brighter, I might not say this enough......</h1>
      </div>

      <CornyQuestion 
        question="I see everything you do for us, every time you explore the world with me, every time you make me laugh when Im sad, every time you believe in me, every good food we try together, every thing you teach me, every everything.."
        nonactive="photo4.JPG"
        active="photo5.jpg"
        primary
        left
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-200 p-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>You are my biggest supporter And my favorite person on earth to talk to</h1>
      </div>

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5">
        <h1 className='w-2/3 text-pink-300 font-bold text-6xl'>Thank you for working so hard for our future thank you for choosing me every day.</h1>
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
          <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>Prom Confirmation Ticket / Review</h1>
          <div className="flex flex-col items-center gap-5 text-center w-3/4 h-5/6 bg-white p-5 rounded-3xl shadow-xl">
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
            <h1 className='w-2/3 text-black font-bold text-4xl underline'>
              Thank You For Your Confirmation!
            </h1>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Name of Partner
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Aidan Ouckama
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Location
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Grove by the River, Newark
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Time
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              9:00 PM - 11:00 PM
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Events
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              • Dinner • Photos • Prom • Post-Prom •
            </h3>
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
          </div>
        </div>
        : 
        <></>
      }
    
    </>
  )
}
