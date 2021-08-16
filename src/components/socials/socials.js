import {useContext} from 'react'
import {TestContext} from '../../TestContext'
export const Socials = (props) => {
    const context = useContext(TestContext)
    console.log(context)
    return (
         
        <a href={props.url}><i className={props.icon} style={{color:props.color}}></i></a>
    )

}
