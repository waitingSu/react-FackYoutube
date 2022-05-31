import React from 'react';

export default function ApprovalCard (props) {
    console.log(props)
    console.log(props.children)
    return (
       <div className='ui card'>
           <div className='content'>
               {props.children}
           </div>
           <div className='extra content'>
               <div className='ui two buttons'>
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
               </div>
           </div>
       </div>
    );
};
