import React from 'react';


//const Header = () => {
 //   return <div> Header sss</div>
//
//}
class Header extends React.Component {
      constructor(props){
        super(props);

        this.state = {
          keywords:''
        }
      }


     inputChange(event){
      this.setState({keywords:event.target.value})
      this.props.newsSearch(event.target.value)
     }


    render(){
       // const styles = {
         //   header:{
           //     background:'#03a9f4'
            //},
           // logo:{
             //   color:'#fff',
               // textAlign:'center'
                 //       }
        //}
         return(
             <header>   
                 <div className="loGo"
                 onClick={()=>{
                     console.log('clicked')
                 }}>logo</div>
                 <input onChange={this.inputChange.bind(this)}/>
             </header>
         )
    }
}



export default Header;