


exports.findUsers = ({nw,ne,sw},Model,filters)=>{
    return  Model.find({latitude:{"$gte":sw.lat,"$lte":nw.lat},longitude:{"$gte":nw.lng,"$lte":ne.lng},status:"talent",...filters},'longitude latitude')

}