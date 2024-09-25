import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {
  const navigate = useNavigate()
  const jobId = '123'
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-300'>
        <div className='flex items-center justify-between'>
            <p className='text-sm text-gray-500 '>2 days ago</p>
            <Button variant="outline" className="rounded-full" size="icon" > 
                <Bookmark/>
            </Button>
        </div>

        <div className='flex items-center gap-2 my-2'>

            <Button>
                <Avatar>
                    <AvatarImage src="https://cdn.dribbble.com/users/9853924/screenshots/19366503/media/6a660904021f2e195a7afcf769e388b9.jpg?resize=400x0" />
                </Avatar>
            </Button>
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>Nepal</p>
            </div>

        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Title</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos magni architecto accusamus dolorum enim adipisci. Suscipit quae nemo eius recusandae!</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant="ghost" > 12 Positions</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost" > Part Time</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant="ghost" > 8 LPA</Badge>
        </div>
        <div className='flex item-center gap-4 mt-4'>
            <Button onClick={()=> navigate(`/description/${jobId}`)} varient="outline">Details</Button>
            <Button className="bg-[#7209b7]">Save for later</Button>
        </div>
    </div>
  )
}

export default Job