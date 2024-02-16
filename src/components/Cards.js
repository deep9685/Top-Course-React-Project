// import { getAllByDisplayValue } from '@testing-library/react'
import React from 'react';
import Card from "./Card";

const Cards = (props) => {

    // console.log(props.courses);

    let courses = props.courses;

    // returns you a list of all courses received from api response
    function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }

  return (
    
    <div>
        {
            getCourses().map((course) => (
                <Card key = {course.id} course = {course}/>
            ))
        }
    </div>
  )
}

export default Cards;