import './NumberForm.css'

const NumberForm=(props)=>{
    const{centerNumber,GetNumber,setMaxValue,setMinValue}=props;

    return (
        <form className='box-wrapper'>
            <div className="center-number">
                <span>Random Number : {centerNumber}</span>
            </div>
            <div className='form-wrapper'>
                 <div>
                        <p>Minimum Number</p>
                        <input type="number" onChange={(e)=>setMinValue(+e.target.value)}/>
                </div>
                <div>
                        <p>Maximum Number</p>
                        <input type="number" onChange={(e)=> setMaxValue(+e.target.value)} />
                </div>
            </div>
            <button className='btn' onClick={GetNumber}>Get Number</button>
        </form>
    )
}

export default NumberForm;