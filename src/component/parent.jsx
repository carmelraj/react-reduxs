import { useSelector } from 'react-redux';
export default function Parent() {
    const count = useSelector((state) =>state.count.value);
    return (        
        <div>
            <div style={{ fontSize: "30px",color:"darkcyan" }}>The current count is <span style={{color:"red"}}>{count}</span></div>
            <div style={{display:"flex",justifyContent:"center"}}>
    
            </div>
        </div>
    )
}