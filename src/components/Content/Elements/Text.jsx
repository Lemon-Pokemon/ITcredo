
function Text ({big, size_b, fontWeight_b = 500, small, size_s, fontWeight_s = 500, gap}){
    return(
        <div className="text" >
            <p className="text_big" style={{marginBottom:gap,fontSize:size_b, fontWeight: fontWeight_b}}>{big}</p>
            <p className="text_small" style={{fontSize:size_s, fontWeight: fontWeight_s}}>{small}</p>
        </div>
    )
}

export default Text;