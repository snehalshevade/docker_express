function createresult(error,data)
{
    const result={}

    if(error)
    {
        result['status']='error'
        result['error']=error
    }
    else{
        result['status']='success'
        result['data']=data
    }

    return result

}

module.exports={
    createresult:createresult
}