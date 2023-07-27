import React,{Component} from 'react';
import './SurveyForm.css'
import { Checkbox } from '@mui/material';
import { FaStar } from "react-icons/fa";
import {Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import {Home, Logout,Settings} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import survey from './logo.png';
import survey2 from './survey2.avif';
import Signin from './Signin'
import HomePage from './HomePage'
import Footer from './Footer'
import axios from 'axios'
import { Link } from 'react-router-dom';


class SurveyForm extends Component{


    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            phoneno:'',
            qone:'',
            qtwo:'',
            qthree:'',
            qfour:'',
            qfive:'',
            qsix:'',
            qseven:'',
            qeight:'',
            qnine:'',
            qten:'',
            qeleven:'',
        };
    }

    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
    };
    handleEmailChange=(event)=>{
        this.setState({email:event.target.value})
    };
    handlePhonenoChange=(event)=>{
        this.setState({phoneno:event.target.value})
    };
    handleQoneChange=(event)=>{
        this.setState({qone:event.target.value})
    };
    handleQtwoChange=(event)=>{
        this.setState({qtwo:event.target.value})
    };
    handleQthreeChange=(event)=>{
        this.setState({qthree:event.target.value})
    };
    handleQfourChange=(event)=>{
        this.setState({qfour:event.target.value})
    };
    handleQfiveChange=(event)=>{
        this.setState({qfive:event.target.value})
    };
    handleQsixChange=(event)=>{
        this.setState({qsix:event.target.value})
    };
    handleQsevenChange=(event)=>{
        this.setState({qseven:event.target.value})
    };
    handleQeightChange=(event)=>{
        this.setState({qeight:event.target.value})
    };
    handleQnineChange=(event)=>{
        this.setState({qnine:event.target.value})
    };
    handleQtenChange=(event)=>{
        this.setState({qten:event.target.value})
    };
    handleQelevenChange=(event)=>{
        this.setState({qeleven:event.target.value})
    };

    handleSubmit = (event) => {
        // event.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            phoneno: this.state.phoneno,
            qone: this.state.qone,
            qtwo: this.state.qtwo,
            qthree: this.state.qthree   ,
            qfour: this.state.qfour   ,
            qfive: this.state.qfive   ,
            qsix: this.state.qsix   ,
            qseven: this.state.qseven   ,
            qeight: this.state.qeight   ,
            qnine: this.state.qnine   ,
            qten: this.state.qten   ,
            qeleven: this.state.qeleven   ,
        };
        console.log(data);
        axios.post('http://localhost:8082/api/v1/user/post', data)
        window.alert("Submitted your Response !!!")
    }
    
    render(){
        return(
    
            <body>
                                
                <div className="pic1"><img src={survey2} height="500" width="500" alt=""></img></div>
                <div className='wrd1'>
            <div className='contain'>
            <div className='container'>
            <form onSubmit={this.handleSubmit}>
                <h1>Hotel Survey</h1>
                <h4>Refine Experiences, with better way</h4>
                <div className='row'>
                    <label>1. Name : </label><br></br>
                    <input type="text" id='name' placeholder='  Enter your Name...' value={this.state.name}
                        onChange={this.handleNameChange} required/>
                </div>
                <div className='row'>
                    <label>2. Email : </label><br></br>
                    <input type="email" id='email' placeholder='  Enter your Email...' value={this.state.email}
                        onChange={this.handleEmailChange} required/>
                </div>
                <div className='row'>
                    <label>3. Phone Number : </label><br></br>
                    <input type="tel" id='tel' placeholder='  Enter your Phone No...' value={this.state.phoneno}
                        onChange={this.handlePhonenoChange} required/>
                </div>

                <div className='row'>
                    <label>4. Restaurant Name : </label><br></br>
                    <select value={this.setState.qone} onChange={this.handleQoneChange} required>
                        <option value="" disabled selected>Select</option> 
                        <option value={"Saravana Bhavan"} >Saravana Bhavan</option> 
                        <option value={"Sree Annapoorna"} >Sree Annapoorna</option> 
                        <option value={"Cockaraco"} >Cockaraco</option> 
                        <option value={"A2B"} >A2B</option> 
                        <option value={"Shree Aanandhas"}>Shree Aanandhas</option> 
                    </select>
                    {/* <input type="tel" id='tel' placeholder='  Enter your Phone No...' value={this.state.phoneno}
                        onChange={this.handlePhonenoChange}/> */}
                </div>
    
                <div className='row'>
                    <label>5. In a typical month, how often do you visit this Restaurant :</label><br></br>
                    <input type="radio" name="uni" className="check" id="q1"  value={this.setState.qtwo="First time"} onChange={this.handleQtwoChange} required/>
                    <label for="q1">First time</label><br></br>
                    <input type="radio"  name="uni"  className="check" id="q2"  value={this.setState.qtwo="Twice or Thrice"} onChange={this.handleQtwoChange} required/>
                    <label for="q2">Twice or Thrice</label><br/>
                    <input type="radio"  name="uni"  className="check" id="q3"  value={this.setState.qtwo="More than 3 times"} onChange={this.handleQtwoChange} required/>
                    <label for="q3">More than 3 times</label><br/>
                </div>
    
                <div className='row'>
                <label>6. How promptly were you greeted on arrival? </label><br></br>
                <div className="container1">
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <input className='Radio'
                            type="radio"
                            value={givenRating}
                            onChange={this.handleQthreeChange}
                            onClick={() => {
                                this.setState.qthree=givenRating;
                                
                            }}
                            
                        />
                        <div className='Rating'>
                            <FaStar size={30}
                                color={
                                    givenRating-1 < this.state.qthree || givenRating-1 === this.state.qthree 
                                        ? "black"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </div>
                    </label>
                );
            })}
        </div>
                </div>

                <div className='row'>
                    <label>7. How long did you have to wait before you were seated?</label><br></br>
                    <select value={this.setState.qfour} onChange={this.handleQfourChange} required>
                        <option value="" disabled selected>Select</option> 
                        <option value={"It was quick & prompt"} >It was quick & prompt</option> 
                        <option value={"The wait was long"} >The wait was long</option> 
                        <option value={"There is scope for improvement"} >There is scope for improvement</option> 
                    </select>
                </div>


                <div className='row'>
                <label>8. How would you rate the attentiveness of the staff and the service extended? </label><br></br>
                <div className="container1" >
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label >
                        <input className='Radio'
                            type="radio"
                            value={givenRating}
                            onChange={this.handleQfiveChange}
                            onClick={() => {
                                this.setState.qfive=givenRating;
                                
                            }}
                            
                        />
                        <div className='Rating'>
                            <FaStar size={30}
                                color={
                                    givenRating-1 < this.state.qfive || givenRating-1 === this.state.qfive 
                                        ? "black"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </div>
                    </label>
                );
            })}
        </div>
                </div>

                <div className='row'>
                    <label>9. What did you think of the food menu?</label><br></br>
                    <input type="radio" name="un" className="check" id="q1"  value={this.setState.qsix="Satisfactory"} onChange={this.handleQsixChange} required/>
                    <label for="q1">Satisfactory</label><br></br>
                    <input type="radio"  name="un"  className="check" id="q2"  value={this.setState.qsix="Good"} onChange={this.handleQsixChange} required/>
                    <label for="q2">Good</label><br/>
                    <input type="radio"  name="un"  className="check" id="q3"  value={this.setState.qsix="Excellent"} onChange={this.handleQsixChange} required/>
                    <label for="q3">Excellent</label><br/>
                </div>

                <div className='row'>
                <label>10. How happy are you with the quality & taste of the food? </label><br></br>
                <div className="container1">
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <input className='Radio'
                            type="radio"
                            value={givenRating}
                            onChange={this.handleQsevenChange}
                            onClick={() => {
                                this.setState.qseven=givenRating;
                                
                            }}
                        />
                        <div className='Rating'>
                            <FaStar size={30}
                                color={
                                    givenRating-1 < this.state.qseven || givenRating-1 === this.state.qseven 
                                        ? "black"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </div>
                    </label>
                );
            })}
        </div>
                </div>

                <div className='row'>
                    <label>11. Any particular dish that made your heart sing? </label><br></br>
                    <input type="text" id='name' placeholder='  Enter the Dish name...' value={this.state.qeight}
                        onChange={this.handleQeightChange} required/>
                </div>

                <div className='row'>
                    <label>12. How would you rate the overall cleanliness & hygiene?</label><br></br>
                    <input type="radio" name="unii" className="check" id="q1"  value={this.setState.qnine="Worst"} onChange={this.handleQnineChange} required/>
                    <label for="q1">Worst</label><br></br>
                    <input type="radio" name="unii" className="check" id="q1"  value={this.setState.qnine="Bad"} onChange={this.handleQnineChange} required/>
                    <label for="q1">Bad</label><br></br>
                    <input type="radio" name="unii" className="check" id="q1"  value={this.setState.qnine="Satisfactory"} onChange={this.handleQnineChange} required/>
                    <label for="q1">Satisfactory</label><br></br>
                    <input type="radio" name="unii" className="check" id="q1"  value={this.setState.qnine="Good"} onChange={this.handleQnineChange} required/>
                    <label for="q1">Good</label><br></br>
                    <input type="radio" name="unii" className="check" id="q1"  value={this.setState.qnine="Excellent"} onChange={this.handleQnineChange} required/>
                    <label for="q1">Excellent</label><br></br>
                </div>

                <div className='row'>
                <label>13. Overall Rating for our Restaurant? </label><br></br>
                <div className="container1">
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <input className='Radio'
                            type="radio"
                            value={givenRating}
                            onChange={this.handleQtenChange}
                            onClick={() => {
                                this.setState.qten=givenRating;
                                
                            }}
                        />
                        <div className='Rating'>
                            <FaStar size={30}
                                color={
                                    givenRating-1 < this.state.qten || givenRating-1 === this.state.qten 
                                        ? "black"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </div>
                    </label>
                );
            })}
        </div>
                </div>

                <div className='row'>
                    <label>14. Any Constructive/ Destructive Comments on our Restaurant? (Optional) </label><br></br>
                    <input type="text" id='name' maxLength="30" placeholder=' Comments less than 30 words' value={this.state.qeleven}
                        onChange={this.handleQelevenChange}/>
                </div>
    
                <div className='row'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
            </div>
            {/* <div className='row'>
                    <Link to="/Share"><button className='btn btn-primary'>Generate Link</button></Link>
                </div> */}
            </div></div>
            </body>
         );
    }
}

export default SurveyForm