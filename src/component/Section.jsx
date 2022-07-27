import React from 'react';

const Section = (props) => {
    console.log(props.users);
    return (
        <div className='li'>

        <div className='table'>
                    <tr className='tr'>
                    <th>имя</th>
                    <th>фамилия</th>
                    <th>возрaст</th>
                    <th>id</th>
                    </tr>
                {props.users.map((el) => {
                    return (
                    
                    <tr className='td'>
                    <td>{el.name}</td>
                    <td>{el.lastName}</td>
                    <td>{el.age}</td>
                    <td>{el.id}</td>
                   </tr>


)

}
)
}
</div>




        </div>
    );
};

export default Section;