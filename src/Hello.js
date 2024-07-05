// Function Component

function Hello1()
{
    return(
        <h1> Hello from Hello1 Component </h1>
    )
}

function Hello2()
{
    return(
        <h2>  Hello from Hello2 Component </h2>
    )
}

function Hello3()
{
    return(
        <h2>  Hello from Hello3 Component </h2>
    )
}


function Hello4({name})
{
    return(
        <h1> Hello {name} </h1>
    )
}

function Hello5(props)
{
    return(
        <h1> Hello {props.name} , Your dept is {props.dept}
        <br/>
        and your manager is {props.manager} </h1>
    )
}
const Hello6 = (props)=>
{
    return(
        <h1> Hello {props.name} , Your dept is {props.dept}
        <br/>
        and your manager is {props.manager} </h1>
    )
}
export default Hello1;
export {Hello2,Hello3, Hello4, Hello5, Hello6};