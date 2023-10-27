
const Data=()=>{
    let data=[];
    let ressources = {
        value_max:0,
        value_min:0,
        value_act:0,
        default_value:0
    }

    for (let i=0; i<4; i++){
        let item={id:'', value:{}};
        item.id='partie'+i;
        item.value={pv:ressources, mana:ressources,po:ressources}
        data.push(item);
    }

    return data;
}
export default Data
