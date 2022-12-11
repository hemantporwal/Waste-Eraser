const API_URL = process.env.REACT_APP_API_URL;

export async function addBin(address, category, latitude, longitude, addedBy){
    
    const response = await fetch(`${API_URL}/api/markers/addbin`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({address, latitude, longitude, category, addedBy})
    });

    const json = await response.json();
    return json;    
}

export async function getBin(){
    
    const response = await fetch(`${API_URL}/api/markers/getbin`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const json = await response.json();
    if(json.success){
        return json.binList;
    }
    return [];    
}

export async function getTree(){
    
    const response = await fetch(`${API_URL}/api/markers/gettree`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const json = await response.json();
    console.log(json);
    if(json.success){
        return json.treeList;
    }
    return [];    
}




