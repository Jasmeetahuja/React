import Header from "./header";

class React{
   constructor(){
      this.props = 4
   }
   whateverfunction(){
       console.log('heyy')
   }

}

class Header extends React {
    constructor(){
        super();
    }
}

const react = new React();
const header = new Header();

react.whateverfunction()

console.log(header.props)

