import ListGroup from 'react-bootstrap/ListGroup';

function Add(prop){
    
    const Item = prop.data
   
    return(
        <>
            {
          
                Item.map((e,i)=>{
                   
                    return (
                    <ListGroup.Item className='fix'>
                    <div className='left'>
                            {e.Title}
                        </div>
                        <div className='right'>
                            {e.Auhthor}
                        </div>
                    </ListGroup.Item>
                    )
                })
             }
        </>
    
    )
}

export default Add;