import tractor2 from '../assets/tractor1.jpg';

export default function Card(){
    return (
      <div className="card" style={{ width: '18rem'}}>

            <img src={tractor2} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is some important text.</p>quantity
                <select className='m-2  bg-success'>
                    {Array.from(Array(5), (e,i)=>{
                        return(
                            <option key={i+1} value={i+1}>{i+1}</option>
                        )
                    })}
                </select>&nbsp;&nbsp;&nbsp;
                <div style={{display:"inline"}}>
                    Total Price
                </div>
            </div>
        </div>
      
    )
}