import React from 'react'
import StartNav from '../components/StartNav'
import "./start.css"
import Com from '../components/Com'

function page() {
  return (
    <>
    <div className="start-page">
        <StartNav />
        <div className="page-con">
            <h1>Hi, I'm Batsy!</h1>
            <h1>What can i help you with?</h1>
            <div className="">
                <Com p={"Buying a home"} img={"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
                <Com p={"Refinance my mortgage"} img={"https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
                <Com p={"Get cash from my home"} img={"https://images.pexels.com/photos/1461996/pexels-photo-1461996.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
            </div>
            <div className="small-box">
                <div className="small-box-left">
                    <h1>$100B</h1>
                    <p>home loans funded entirely online</p>
                </div>
                <div className="small-box-right">
                    <h1>400K</h1>
                    <p>Customers who chose a Better Mortgage</p>
                </div>
            </div>
            <div className="last-box">
                <p>After a few questions, you'll unlock:</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default page