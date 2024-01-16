function Text ({big,size, small}){
    return(
        <div className="text" >
            <p className="text_big" style={{marginBottom:"10px",fontSize:size}}>{big}</p>
            <p className="text_small">{small}</p>
        </div>
    )
}

export default Text;