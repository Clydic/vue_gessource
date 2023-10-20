const Data=()=>{
    let data=[];
    for (let i=0; i<4; i++){
        let item={id:'', value:{}};
        item.id='partie'+i;
        item.value={pv:120, mana:20,po:30}
        data.push(item);
    }
    return data;
}
export default Data
