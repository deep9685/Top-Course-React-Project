import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;

    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        // logic
        if(likedCourses.includes(course.id)){
            // pehle se like hua pada tha
            setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed!");
        }
        else{
            // pehle se like ni h
            // insert karna h ye course likedcourse me
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                // non-empty pehle se
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("Likes Successfully");
        }
    }



  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden'>
        <div className='relative'>
            <img alt='img' src={course.image.url}></img>

            <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 
            bottom-[-10px] grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />):
                        (<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>

        <div className='p-4 '>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length > 100 ?
                    (course.description.substr(0,100)) + "..." : 
                    (course.description)
                }
            </p>
        </div>
    </div>
  )
}

export default Card;