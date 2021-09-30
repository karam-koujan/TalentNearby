


exports.findUsers = ({nw,ne,sw},Model)=>{
    return  Model.find({latitude:{"$gte":sw.lat,"$lte":nw.lat},longitude:{"$gte":nw.lng,"$lte":ne.lng} },'longitude latitude')

}