function Text ({big,size_b, gap, small, size_s}){
    return(
        <div className="text" >
            <p className="text_big" style={{marginBottom:`${gap}`,fontSize:`${size_b}`}}>{big}</p>
            <p className="text_small" style={{fontSize:`${size_s}`}}>{small}</p>
        </div>
    )
}

export default Text;