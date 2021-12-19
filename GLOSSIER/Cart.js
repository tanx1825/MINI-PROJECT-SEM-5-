import React from 'react'

import Footer from './comp/Footer'
import Navbar from './comp/Navbar';
import Card from "./comp/Card";
import { useGlobalState } from "./state/state";



export default function Cart() {
    const state = useGlobalState();

    if(state.get().value.length == 0){
        return(
            <>
            <Navbar/>
            <h1>Opss Nothing in your Cart!</h1>
            <Footer/>
            </> 
        )
    }
   
    console.log(state.get().value[0].data);
    return (
       <>
            <Navbar/>
            <h2> Items in your cart - {state.get().value.length} </h2>

            <hr/>
            <br/>
            <div class="row">
            {
                state.get().value.map(x=>(<>
                 <Card image={x.data.image} name={x.data.name} price={x.data.price}/>
                </>))
            }
            </div>
           
            <br/>
            <hr/>
            <Footer/>
            
        </>
    )
}
